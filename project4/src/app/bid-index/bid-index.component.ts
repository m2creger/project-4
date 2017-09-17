import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Bid } from '../bid.model';
import { BidService } from '../bids.service';

@Component({
  selector: 'app-bid-index',
  templateUrl: './bid-index.component.html',
  styleUrls: ['./bid-index.component.css']
})
export class BidIndexComponent implements OnInit {
  //bids: Bid[];
  private subscription;
  userId: string;
  bids: FirebaseListObservable<any>;
  bid: FirebaseObjectObservable<Bid>;
  bidsMessage = "No current bids";
  constructor(
    private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
  		private bidService: BidService,
  		private route: ActivatedRoute,
  		private router: Router
  ) { 
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      if (user) this.userId = user.uid;
    })
  }

  deleteBid(key: string) {
    this.bids.remove(key);
  }

  editBid(key: string) {
    
  }


  ngOnInit() {
    this.bids = this.db.list(`bids/${this.userId}`);
    console.log(this.bids);

    
  	// this.subscription = this.bidService.bidsChanged
  	// 	.subscribe(
  	// 		(bids: Bid[]) => {
  	// 			this.bids = bids;
  	// 			console.log(bids);
   //        //this.parseFirebaseData();
  	// 		}
  	// 	);
  }
  ngOnDestroy() {
   
  }

}
