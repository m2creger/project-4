import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
	// that = this;
	firebaseError = new Subject<string>();
	firebaseAnnounced$ = this.firebaseError.asObservable();
	loggedInUser = new Subject();
	firebaseLoginError = 'Invalid email or password';
	firebaseSignupError = 'Invalid email or password. Password must be at least 6 digits in length';
	
	baseUrl = 'http://localhost:3000';
	// Token return by firebase
	token: string;

	// User id returned by firebase
	uid: string;

	// email returned by firebase
	email: string;

	// Create a new user
	newUser = <any>{};

	constructor(
		private http: Http,
		private router: Router,
		
	) {}


	// Sign up new user with firebase
	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response => {

				this.newUser = response.email;
				console.log("The new user is " + this.newUser)
				
					
				// Make sure user is authenticated
				firebase.auth().currentUser.getToken()
					.then(
						(token: string) => this.token = token)
				// Store user to database
			
				// Then route to home page
				this.router.navigate(['/home']);
			})
			.catch(error =>
				//this.error = error;
				this.returnFirebaseError(this.firebaseSignupError)
			);
		

	}

	loginUser(email: string, password: string) {
		console.log('logging in user');

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					// console.log(response);
					// console.log(response.uid);
					this.uid = response.uid;
					console.log(this.uid);
					this.email = response.email;
					
					console.log(response.email);
					//Get token for authorization
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token)
						// Store user to database
					
					//route user to homepage
					return this.router.navigate(['/home']);
					// return this.email;
					
			})
			.catch(error => 
				//this.error = error;
				//console.log(error);
				this.returnFirebaseError(this.firebaseLoginError)

		);


	};

	getToken() {
		firebase.auth().currentUser.getToken()
			.then(
				(token: string) => this.token = token
			);
			// need to call data service to get user info

			console.log("calling get token");
			
			return this.token;
	}

	returnFirebaseError(error: string) {
		console.log("Firebase error");
		this.firebaseError.next(error);
	}

	isAuthenticated() {
		return this.token != null;
	}

	// logout
	logout() {
		firebase.auth().signOut();
		this.router.navigate(['']);
		this.token = null;
	}


	
}
