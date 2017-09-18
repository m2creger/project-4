import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SearchService } from '../search.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  searchResults;
  searchResultsArray = [];

  constructor(
  	public authService: AuthService,
    public searchService: SearchService
  ) { 
    this.subscription = this.searchService.wolframConfiguredSearchResults()
      .subscribe(
        (searchResults) => {
          
          this.searchResults = searchResults;
          console.log(this.searchResults);
          this.parseSearchResults(this.searchResults);
        }
     );
  }

  parseSearchResults(searchResults) {
    for (var i = 0; i < searchResults.length; i++) {
      console.log(searchResults[i][0].img);
      this.searchResultsArray.push(searchResults[i][0].img);
    }
  }

  ngOnInit() {
    

  }

  onLogout() {
  	this.authService.logout();
  }

  searchForTerm(form: NgForm) {
    this.searchResultsArray = [];
    var searchTerm = form.value.searchTerm;
    this.searchService.searchWolfram(searchTerm);
    console.log(form.value.searchTerm);
  }

}
