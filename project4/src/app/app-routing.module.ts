import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { BidsComponent } from './bids/bids.component';
import { NewBidComponent } from './new-bid/new-bid.component';
import { BidIndexComponent } from './bid-index/bid-index.component';
import { WorkersComponent } from './workers/workers.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'projects',
		component: ProjectsComponent
	},
	{
		path: 'workers',
		component: WorkersComponent
	},
	{
		path: 'equipment',
		component: EquipmentComponent
	}
	
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}