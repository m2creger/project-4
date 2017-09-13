import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SearchService } from '../search.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  	public authService: AuthService,
    public searchService: SearchService
  ) { }

  ngOnInit() {

  }

  onLogout() {
  	this.authService.logout();
  }

  searchForTerm(form: NgForm) {
    var searchTerm = form.value.searchTerm;
    this.searchService.searchWolfram(searchTerm);
    console.log(form.value.searchTerm);
  }

}
