import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
 
  constructor(
  	private router: Router,
  	private projectService: ProjectService
  ) {
  }

  ngOnInit() {
  }

}
