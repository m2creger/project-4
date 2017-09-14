import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = 0
  constructor(private router: Router) {
  	this.routeLinks = [
  		{label: 'New Bids', link: 'newbid'},
  		{label: 'All Bids', link: 'allbids'}
  	];
  }

  ngOnInit() {
  }

}
