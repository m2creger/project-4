import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoBids: string;
  photoProjects: string;

  constructor() { }

  ngOnInit() {
  	this.photoBids = '/assets/images/pexels-photo-259966.jpeg';
  	this.photoProjects = '/assets/images/pexels-photo-443383.jpeg';
  }

}
