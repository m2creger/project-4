import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Bid } from '../bid.model';
import { BidService } from '../bids.service';

@Component({
  selector: 'app-bid-index',
  templateUrl: './bid-index.component.html',
  styleUrls: ['./bid-index.component.css']
})
export class BidIndexComponent implements OnInit {
  bids: Bid[];
  subscription: Subscription;

  constructor(
  		private bidService: BidService,
  		private route: ActivatedRoute,
  		private router: Router
  ) { }

  ngOnInit() {
  	this.bidService.getBids();
  	this.subscription = this.bidService.bidsChanged
  		.subscribe(
  			(bids: Bid[]) => {
  				this.bids = bids;
  				console.log(bids);
  			}
  		);
  }

}
