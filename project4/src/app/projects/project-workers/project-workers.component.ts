import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { WorkerService } from '../../worker.service';
import { ProjectService } from '../../projects.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-project-workers',
  templateUrl: './project-workers.component.html',
  styleUrls: ['./project-workers.component.css']
})
export class ProjectWorkersComponent implements OnInit {

  siteWorkers: FirebaseListObservable<any>;
  userId: string;
  id;
  
  constructor(
     private afAuth: AngularFireAuth,
     private db: AngularFireDatabase,
     private route: ActivatedRoute,
     private router: Router,
     private workerService: WorkerService
   ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  	this.siteWorkers = this.db.list(`projects/${this.userId}/${this.id}/workers`);
  }

  addWorkers() {
  	this.router.navigate(['addworkers', this.id]);
  }

  deleteWorker(key) {
    this.workerService.removeWorkerFromJobSite(this.id, key);
  }

  close() {
    this.router.navigate(['allprojects']);
  }

}
