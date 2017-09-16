import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from './user.model';
@Injectable()
export class AuthService {
	// that = this;
	firebaseError = new Subject<string>();
	firebaseAnnounced$ = this.firebaseError.asObservable();
	loggedInUser = new Subject();
	firebaseLoginError = 'Invalid email or password';
	firebaseSignupError = 'Invalid email or password. Password must be at least 6 digits in length';
	userIsAuthenticated = false;

	user: FirebaseObjectObservable<User>;
	users: FirebaseListObservable<User[]>;
	baseUrl = 'http://localhost:3000';
	// Token return by firebase
	token: string;

	// User id returned by firebase
	userId: string;

	// email returned by firebase
	email: string;

	// Create a new user
	newUser = <any>{};


	constructor(
		//private firebaseAuth: AngularFireAuth
		private http: Http,
		private router: Router,
		public afAuth: AngularFireAuth,
		db: AngularFireDatabase
		
	) {
		this.users = db.list('/users');
	}


	// Sign up new user with firebase
	signupUser(email: string, password: string) {
		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then(response => {

				this.newUser = response.email;
				console.log("The new user is " + this.newUser)
				
				this.userIsAuthenticated = true;		
				// Make sure user is authenticated
				firebase.auth().currentUser.getToken()
					.then(
						(token: string) => this.token = token)
				// Store user to database
			
				// Then route to home page
				this.router.navigate(['/home']);
			})
			.catch(error =>
				
				this.returnFirebaseError(error.message)
			);
		

	}

	loginUser(email: string, password: string) {
		console.log('logging in user');

		this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then(
				response => {
					
					this.email = response.email;
				
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token)
						// Store user to database
					this.userIsAuthenticated = true;
					//route user to homepage
					return this.router.navigate(['/home']);
					// return this.email;
					
			})
			.catch(error => 
				//this.error = error;
				//console.log(error);
				this.returnFirebaseError(error.message)

		);


	};

	// getToken() {
	// 	this.afAuth.auth.currentUser.getIdToken()
	// 		.then(
	// 			(token: string) => this.token = token
	// 		);
	// 		// need to call data service to get user info

	// 		console.log("calling get token");
			
	// 		return this.token;
	// }

	returnFirebaseError(error: string) {
		console.log("Firebase error");
		this.firebaseError.next(error);
	}

	isAuthenticated() {
		return this.token != null;
	}

	// logout
	logout() {
		this.afAuth.auth.signOut();
		this.router.navigate(['']);
		this.token = null;
	
	}

	createUser(user: User): void {
		console.log("creating user");
		console.log(user);
		this.users.push(user);
	}


	
}
