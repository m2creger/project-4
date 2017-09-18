import { Component, OnInit } from '@angular/core';
import { BidService } from '../bids.service';
import { fadeInAnimation } from '../_animations/index';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]' : ''}
})
export class HomeComponent implements OnInit {
  photoBids: string;
  photoProjects: string;

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.bidService.getBidsList();
  	this.photoBids = '/assets/images/pexels-photo-259966.jpeg';
  	this.photoProjects = '/assets/images/pexels-photo-443383.jpeg';
  }

}
