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
  bidPackage = <any>{};

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

  projectDetail(key: string) {
    this.router.navigate(['projectdetail', key]);
  }

  showBidPackage(key) {
    this.projectService.getBidPackageList(key)
      .subscribe(
         response => {
           console.log("*****Getting bid package");
           console.log(response);
         }
       )
  }

  materialsUsed(key: string) {
    this.router.navigate(['projectmaterials', key]);
  }

  laborUsed(key: string) {
    this.router.navigate(['projectlabor', key]);
  }

  equipmentUsed(key: string) {
    this.router.navigate(['projectequipment', key])
  }

  deleteProject(key: string) {
    this.projects.remove(key);
  }

  addProjectCost(key: string) {
    this.router.navigate(['addprojectcosts', key]);
  }

  close() {
    this.router.navigate(['projects']);
  }

}