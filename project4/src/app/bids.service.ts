import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Bid } from './bid.model';

@Injectable()
export class BidService {

	baseUrl = 'http://localhost:3000';
	firebaseUrl = 'https://forge-a80b9.firebaseio.com/bids.json';
	bidsChanged = new Subject<Bid[]>();
	private bids: Bid[] = [

	]

	constructor(private http: Http) { }

	getBids() {
		return this.http.get(this.firebaseUrl)
			//.map(
				// (response) => {
				// 	this.bids =  response.json();
				// 	return this.bids;
					// Check bids
					// for (let bid of this.bids) {
						// if certain field does not have a value give it a default
					// 	if(!bid['bidName']) {
							// bid['bidName'] = "";
					// 	}
					// }
			//})
			.subscribe(
				(response) => {
					this.bids = response.json();
					console.log(this.bids);
				}
			);
	}

	deleteBid(id) {
		return this.http.delete(this.firebaseUrl + id)
	}

	addBids(bid: Bid) {

		this.bids.push(bid);
		console.log(this.bids);
		this.http.post(this.firebaseUrl, this.bids)
			.subscribe(
				(response) => {
					var newBidPosted = response.json();
					console.log(newBidPosted);
					
				}

			);

	}

	getBidById(id) {
		this.http.get(this.firebaseUrl + id);
	}

	
}