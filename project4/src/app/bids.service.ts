import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Bid } from './bid.model';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BidService {
	
	bidsChanged = new Subject<Bid[]>();
	private basePath: string = '/bids';
	mappedBids: Observable<any[]>;
	bids: FirebaseListObservable<any>;
	bid: FirebaseObjectObservable<Bid> = null;
	userId: string;

	constructor(
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth
	) { 
			// .map(bids => {
			// 	bids.map(bid => {
			// 		bid.bidLocation = this.db.object('/bids/' + bid.bidLocation)
			// 	});
			// 	return bids;
			// });
		// Get one bid
		//this.bid = db.object(/bids/bid)
		this.afAuth.authState.subscribe(user => {
			console.log(user);
			if (user) this.userId = user.uid;
		})
	}

	// Get all bids from firebase
	getBidsList(): FirebaseListObservable<Bid[]>{
		// No user id return
		if (!this.userId) return;
		// 
		this.bids = this.db.list(`bids/${this.userId}`);
		//this.bidsChanged = this.bids;
		return this.bids;
	}
	// Create bid to send to firebase
	createBid(bid: Bid): void {
		console.log("Creating bid");
		console.log(bid);
		console.log(this.userId);
		bid.userId = this.userId;
		this.bids.push(bid);
		
		// this.bids.remove(key)
		// 	.catch(error => this.handleError(error))
	}

	removeBid(key: string) {
		this.bids.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	updateBid(key: string, newText: string) {
		//this.db.object(/bids/'{this.userId}').update({
			// update bid object
		//})
	}
	// handle firebase errors
	private handleError(error) {
		console.log(error)
	}

	
}