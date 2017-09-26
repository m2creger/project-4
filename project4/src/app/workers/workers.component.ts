import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  newWorker = <any>{}

  constructor() { }

  ngOnInit() {
  }

  createNewWorker(newWorker) {
  	
  }


}
