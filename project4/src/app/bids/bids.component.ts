import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BidService } from '../bids.service';
@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = 0
  constructor(
    private router: Router,
    private bidService: BidService
  ) {
  	this.routeLinks = [
  		{label: 'New Bids', link: 'newbid'},
  		{label: 'All Bids', link: 'allbids'}
  	];
  }

  ngOnInit() {
    //this.bidService.getBids();
  }

}
