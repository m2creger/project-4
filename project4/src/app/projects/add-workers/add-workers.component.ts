import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { WorkerService } from '../../worker.service';
import { ProjectService } from '../../projects.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-add-workers',
  templateUrl: './add-workers.component.html',
  styleUrls: ['./add-workers.component.css']
})
export class AddWorkersComponent implements OnInit {

  workers : FirebaseListObservable<any>;
  userId: string;
  id;
  workerToAdd;

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
  	this.workers = this.db.list(`workers/${this.userId}`);
  }

  addWorkersToSite(key) {
    console.log(key);
    this.workerToAdd = this.workerService.getWorker(key)
      .subscribe( response => {
        console.log(response);
        this.workerService.addWorkerToJobSite(this.id, response);
        this.router.navigate(['projectworkers', this.id]);
      })
    
  }

}
