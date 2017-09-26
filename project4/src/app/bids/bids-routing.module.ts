import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { BidsComponent } from './bids.component';
import { NewBidComponent } from '../new-bid/new-bid.component';
import { BidIndexComponent } from '../bid-index/bid-index.component';
import { BidEditComponent } from '../bid-edit/bid-edit.component';
import { BidCreateComponent } from '../bid-create/bid-create.component';
import { BidDetailComponent } from '../bid-detail/bid-detail.component';

const bidRoutes: Routes = [
	{
		path: 'bids',
		component: BidsComponent
	},
	{
		path: 'newbid',
		component: NewBidComponent
	},
	
	{
		path: 'allbids',
		component: BidIndexComponent
	},
	{
		path: 'editbid',
		component: BidEditComponent
	},
	{
		path: 'createbid/:id',
		component: BidCreateComponent
	},
	{
		path: 'showbid/:id',
		component: BidDetailComponent
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(bidRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class BidsRoutingModule { }