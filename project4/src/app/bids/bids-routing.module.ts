import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { BidsComponent } from './bids.component';
import { NewBidComponent } from '../new-bid/new-bid.component';
import { BidIndexComponent } from '../bid-index/bid-index.component';

const bidRoutes: Routes = [
	{
		path: 'bids',
		component: BidsComponent,
		children: [
			{
				path: 'newbid',
				component: NewBidComponent
			},
			{
				path: 'allbids',
				component: BidIndexComponent
			}
		]
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