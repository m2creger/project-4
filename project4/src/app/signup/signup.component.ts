import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { ApiKeyService } from '../apikey.service';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  subscription: Subscription;
  newUser = <any>{};
  photo: string;
  message: any;
  firebaseError;
  firebaseErrorMessage: string;
  // Token return by firebase
  token: string;

  // User id returned by firebase
  uid: string;

  // email returned by firebase
  email: string;
  
  constructor(
      private firebaseService: FirebaseService,
      private authService: AuthService,
      private router: Router,
      private apiKeyService: ApiKeyService
   ) {
      this.subscription = this.firebaseService.startFirebase().subscribe(
         message => {
           this.message = message;
       });
      authService.firebaseAnnounced$.subscribe(
         error => {
           this.firebaseErrorMessage = error
         }
      )
   }

  ngOnInit() {
    //this.photo = "/assets/images/food-man-person-eating.jpg";
  }

  onSignup(newUser) {
    
    console.log("the new user is " + newUser);
  	const email = newUser.email;
  	const password = newUser.password;
    console.log(email);
    console.log(password);
    this.authService.signupUser(email, password)
 
  }

}
