import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Bid } from './bid.model';
@Injectable()

export class BidService {
	baseUrl = 'http://localhost:3000';

	bidsChanged = new Subject<Bid[]>();
	private bids: Bid[] = [

	]

	getBids() {
		return this.bids.slice();
	}

	addBids(bid: Bid) {

		this.bids.push(bid);
		console.log(this.bids);

	}
}