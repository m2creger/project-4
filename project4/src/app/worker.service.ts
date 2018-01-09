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
	jobSite;
	jobSiteWorkers;

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
	
		return this.workers;
	}

	getWorker(key): FirebaseObjectObservable<any> {
		if (!this.userId) return;

		this.worker = this.db.object(`workers/${this.userId}/${key}`);
		return this.worker;

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

	addWorkerToJobSite(key: string, worker: Worker) {
		this.jobSite = key;
		console.log(worker);
		console.log(key);
		this.jobSiteWorkers = this.db.list(`projects/${this.userId}/${this.jobSite}/workers`);
		console.log(this.jobSiteWorkers);
		this.jobSiteWorkers.push(worker);
	}

	removeWorkerFromJobSite(jobSiteKey: string, workerKey: string ) {
		this.jobSite = jobSiteKey;
		this.jobSiteWorkers = this.db.list(`projects/${this.userId}/${this.jobSite}/workers`);
		this.jobSiteWorkers.remove(workerKey)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	
}