import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ng2-modal';
import { PopoverModule } from 'ng2-popover';
import { FlashMessagesModule } from 'angular2-flash-messages';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';

//import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Services
import { FirebaseService } from './firebase.service';
import { AuthService } from './auth.service';
import { SearchService } from './search.service';
import { ApiKeyService } from './apikey.service';
import { BidService } from './bids.service';
import { MaterialService } from './material.service';
import { LaborService } from './labor.service';
import { ProjectService } from './projects.service';
// Components
import { AppRoutingModule } from './app-routing.module';
import { BidsRoutingModule } from './bids/bids-routing.module';
import { ProjectRoutingModule } from './projects/project-routing.module';
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
import { BidItemComponent } from './bid-item/bid-item.component';
import { environment } from '../environments/environment';
import { BidEditComponent } from './bid-edit/bid-edit.component';
import { BidCreateComponent } from './bid-create/bid-create.component';
import { BidLaborComponent } from './bid-item/bid-labor/bid-labor.component';
import { BidMaterialComponent } from './bid-item/bid-material/bid-material.component';
import { BidEquipmentComponent } from './bid-item/bid-equipment/bid-equipment.component';
import { DynamicBidComponent } from './dynamic-bid.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectIndexComponent } from './projects/project-index/project-index.component';
import { BidDetailComponent } from './bid-detail/bid-detail.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { WorkersComponent } from './workers/workers.component';
import { EquipmentComponent } from './equipment/equipment.component';
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
    BidIndexComponent,
    BidItemComponent,
    BidEditComponent,
    BidCreateComponent,
    BidLaborComponent,
    BidMaterialComponent,
    BidEquipmentComponent,
    NewProjectComponent,
    ProjectEditComponent,
    ProjectIndexComponent,
    BidDetailComponent,
    ProjectDetailComponent,
    WorkersComponent,
    EquipmentComponent

  ],
  imports: [
    //BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BidsRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    PopoverModule,
    //AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ProjectRoutingModule,
    FlashMessagesModule,
    //MDBBootstrapModule,

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    FirebaseService,
    AuthService,
    ApiKeyService,
    SearchService,
    BidService,
    MaterialService,
    LaborService,
    ProjectService
  ],
  bootstrap: [AppComponent],
  entryComponents: [BidMaterialComponent, BidEquipmentComponent, BidLaborComponent]
})
export class AppModule { }
