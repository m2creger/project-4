import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = 0;
  constructor(
  	private router: Router,
  	private projectService: ProjectService
  ) { 

  	this.routeLinks = [
  		{ label: 'New Project', link: 'newproject'},
  		{ label: 'All Projects', link: 'allprojects'}
  	]
  }

  ngOnInit() {
  }

}
