import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Worker } from '../worker.model';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { WorkerService } from '../worker.service';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  newWorker = <any>{}
  workers: FirebaseListObservable<any>;
  worker: FirebaseObjectObservable<any>;
  userId: string;


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
    
    this.workers = this.db.list(`workers/${this.userId}`)
  }

  createNewWorker(newWorker) {
  	const workerName = newWorker.workerName;
    const workerRate = newWorker.workerRate;
    const workerJobTitle = newWorker.workerJobTitle;

    this.newWorker = {
      workerName: workerName,
      workerRate: workerRate,
      workerJobTitle: workerJobTitle
    }

    this.workerService.createWorker(this.newWorker);
    this.clearForm()
  }

  clearForm() {
    this.newWorker.workerName = null;
    this.newWorker.workerRate = null;
    this.newWorker.workerJobTitle = null;

  }

  close() {
    this.router.navigate(['home']);
  }


}
