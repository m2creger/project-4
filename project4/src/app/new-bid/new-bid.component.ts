import { Component, OnInit } from '@angular/core';
import { BidService } from '../bids.service';
import { Bid } from '../bid.model';
@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.css']
})
export class NewBidComponent implements OnInit {
  
  newBid = <any>{};
  //bid: Bid = new Bid();
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
    this.bidService.createBid(newBid);
  }

}
