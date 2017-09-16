import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Bid } from '../bid.model';
import { BidService } from '../bids.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFire } from 'angularfire';
@Component({
  selector: 'app-bid-item',
  templateUrl: './bid-item.component.html',
  styleUrls: ['./bid-item.component.css']
})
export class BidItemComponent implements OnInit {
  
  @Input() bid: Bid;
  @Input() index: number;
  
  public bids: FirebaseListObservable<Bid[]>;
  subscription: Subscription;
  bidsMessage = "No current bids";

  constructor(
  	  private bidService: BidService,
  		private route: ActivatedRoute,
  		private router: Router,
      private afDatabase: AngularFireDatabase
  ) { }

  // parseFirebaseData() {
  //   for (var i = 0; i < this.bids.length; i++) {
  //     console.log(this.bids[i]);
  //   }
  // }

  ngOnInit() {
    this.bids = this.afDatabase.list('/bids')
    console.log(this.bids);
    //this.bids = this.bidService.getBidsList();
  	// this.subscription = this.bidService.bidsChanged
  	// 	.subscribe(
  	// 		(bids: Bid[]) => {
  	// 			this.bids = bids;
  	// 			console.log(bids);
   //        this.parseFirebaseData();
  	// 		}
  	// 	);
     //this.bids = this.bidService.getBids();
  }

}
