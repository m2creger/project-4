import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ApiKeyService } from '../apikey.service';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  message: any;
  newUser = <any>{}
  loggedInUser = <any>{}
  firebaseErrorMessage: string;
  //authToken = new Subject<string>();
  token: string;
  // User id returned by firebase
  uid: string;

  // email returned by firebase
  email: string;

  constructor(
              private firebaseService: FirebaseService,
              private authService: AuthService,
              private apiKeyService: ApiKeyService,
              private router: Router) { 
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
    
    
  	
  }

  onLogin(form: NgForm) {
  	console.log("onLogin clicked");
    const email = form.value.email;
    console.log(email);
    const password = form.value.password;
    console.log(password);
    this.newUser = { email, password};
    this.authService.loginUser(email, password);
  
  }

}
