import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdTabsModule } from '@angular/material';

// Services
import { FirebaseService } from './firebase.service';
import { AuthService } from './auth.service';
import { SearchService } from './search.service';
import { ApiKeyService } from './apikey.service';

// Components
import { AppRoutingModule } from './app-routing.module';
import { BidsRoutingModule } from './bids/bids-routing.module';

// Routing


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BidsComponent } from './bids/bids.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NewBidComponent } from './new-bid/new-bid.component';
import { BidIndexComponent } from './bid-index/bid-index.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BidsComponent,
    ProjectsComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    NewBidComponent,
    BidIndexComponent
  ],
  imports: [
    //BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BidsRoutingModule
  ],
  providers: [
    FirebaseService,
    AuthService,
    ApiKeyService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
