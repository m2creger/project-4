import { Component, OnInit } from '@angular/core';
import { BidService } from '../bids.service';
import { fadeInAnimation } from '../_animations/index';
import { ProjectService } from '../projects.service';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private bidService: BidService,
    private projectService: ProjectService
    ) { }

  ngOnInit() {
    this.bidService.getBidsList();
    this.projectService.getProjectsList()
  	this.photoBids = '/assets/images/pexels-photo-259966.jpeg';
  	this.photoProjects = '/assets/images/pexels-photo-443383.jpeg';
  }

  showWorkers() {
    this.router.navigate(['workers']);
  }

}
