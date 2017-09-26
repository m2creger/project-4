import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Project } from './project.model';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable() 

export class ProjectService {
	projectsChanged = new Subject<Project[]>();
	private basePath: string = '/projects';
	projects: FirebaseListObservable<any>;
	project: FirebaseObjectObservable<Project> = null;
	userId: string;

	constructor(
		private router: Router,
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth
	) {
		this.afAuth.authState.subscribe(user => {
			console.log(user);
			if (user) this.userId = user.uid;
		})
	}

	createProject(project): void {
		console.log("creating project");
		console.log(project);
		project.userId = this.userId;
		this.projects.push(project);
		this.router.navigate(['projects/allprojects']);
	}

	getProjectsList(): FirebaseListObservable<Project[]> {
		if(!this.userId) return;

		this.projects = this.db.list(`projects/${this.userId}`);
		return this.projects;
	}

	removeProject(key: string) {
		this.projects.remove(key)
			.then(response => console.log("success"))
			.catch(error => console.log("error", error));
	}
}