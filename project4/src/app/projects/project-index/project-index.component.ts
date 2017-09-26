import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.css']
})
export class ProjectIndexComponent implements OnInit {
  
  userId: string;
  projects: FirebaseListObservable<any>;
  project: FirebaseObjectObservable<any>;
  noProjectMessage = "No current projects";


  constructor(
  	private afAuth: AngularFireAuth,
  	private db: AngularFireDatabase,
  	private projectService: ProjectService,
  	private route: ActivatedRoute,
  	private router: Router,

  ) {

  	this.afAuth.authState.subscribe(user => {
  		console.log("Getting user form projects" + user);
  		if (user) this.userId = user.uid;
  	})
  }

  ngOnInit() {
  	this.projects = this.db.list(`projects/${this.userId}`)
  }

  projectDetail(key) {

  }

  showBidPackage(key) {

  }

  materialsUsed(key) {

  }

  laborUsed(key) {

  }

  equipmentUsed(key) {

  }

  deleteProject(key) {

  }

}