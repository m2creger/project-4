import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  photo: string;  
  newUser = <any>{};
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  	this.photo = "/assets/images/pexels-photo-220885.jpeg";
  }
  signUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
