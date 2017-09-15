import { Component, OnInit } from '@angular/core';
import { BidService } from '../bids.service';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.css']
})
export class NewBidComponent implements OnInit {
  
  newBid = <any>{};

  constructor(private bidService: BidService) { }

  ngOnInit() {
  }

  createNewProject(newBid) {
  	var newBidName = newBid.newBidName;
  	var newBidLocation = newBid.newBidLocation;
  	console.log(newBidName);
  	console.log(newBidLocation);
    this.newBid = {
      newBidName: newBidName,
      newBidLocation: newBidLocation
    }
    this.bidService.addBids(newBid);
  }

}
