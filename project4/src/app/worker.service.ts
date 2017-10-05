import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Worker } from './worker.model';

@Injectable()
export class WorkerService {
	workersChanged = new Subject<Worker[]>();
	workers: FirebaseListObservable<any>;
	worker: FirebaseObjectObservable<any>;

	userId: string;
	updatingWorker;

	constructor(
		private router: Router,
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth
	) {
		this.afAuth.authState.subscribe(user => {

			if (user) this.userId = user.uid;
		})
	}

	getWorkers(): FirebaseListObservable<Worker[]> {
		if (!this.userId) return;

		this.workers = this.db.list(`workers/${this.userId}`);
	
		return this.workers
	}

	createWorker(worker: Worker): void {
		worker.userId = this.userId;
		this.workers.push(worker).then((worker) => {
			console.log(worker);
		})
		this.router.navigate(['workers']);
	}

	removeWorker(key: string) {
		this.workers.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	
}