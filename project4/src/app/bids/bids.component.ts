import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BidService } from '../bids.service';
@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {


  constructor(
    private router: Router,
    private bidService: BidService
  ) {
  
  }

  ngOnInit() {

  }

  showAllBids() {
    this.router.navigate(['allbids']);
  }

  newBid() {
    this.router.navigate(['newbid']);
  }

}
