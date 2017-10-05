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
	projectsBidPackage: FirebaseListObservable<any>;
	project: FirebaseObjectObservable<Project> = null;
	userId: string;
	projectMaterials: FirebaseListObservable<any>;
	projectLabor: FirebaseListObservable<any>;
	projectEquipment: FirebaseListObservable<any>;
	projectToUpdate;
	updatingProjectKey;

	laborToRemove: FirebaseListObservable<any>;
	materialsToRemove: FirebaseListObservable<any>;
	equipmentToRemove: FirebaseListObservable<any>;

	constructor(
		private router: Router,
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth
	) {
		this.afAuth.authState.subscribe(user => {
	
			if (user) this.userId = user.uid;
		})
	}

	createProject(project): void {
		console.log("creating project");
		console.log(project);
		var newProjectName = project.projectName;
    	var newProjectLocation = project.projectLocation;


	    var newProjectToAdd = {
	      projectName: newProjectName,
	      projectLocation: newProjectLocation,
	      bidPackage: project,
	    };

		project.userId = this.userId;
		this.projects.push(newProjectToAdd);
		this.router.navigate(['allprojects']);
	}

	createBidPackage(project): void {
	
		project.userId = this.userId;
		this.projectsBidPackage.push(project);
		this.router.navigate(['allprojects']);
	}

	getProjectsList(): FirebaseListObservable<Project[]> {
		if(!this.userId) return;

		this.projects = this.db.list(`projects/${this.userId}`);
		return this.projects;
	}

	getProject(key): FirebaseObjectObservable<any> {
		this.updatingProjectKey = key;

		this.project = this.db.object(`/projects/${this.userId}/${key}`);

		return this.project;

	}

	// Get the bid package
	getBidPackageList(key): FirebaseListObservable<any> {
		if(!this.userId) return;
		this.projectsBidPackage = this.db.list(`projects/${this.userId}/${this.updatingProjectKey}/bidPackage`);

		return this.projectsBidPackage;
	}

	getProjectLabor(key): FirebaseListObservable<any> {
		this.projectLabor = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/labor`);
		return this.projectLabor;
	}

	getProjectMaterials(key): FirebaseListObservable<any> {
		this.projectMaterials = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/materials`);
		return this.projectMaterials;
	}

	getProjectEquipment(key): FirebaseListObservable<any> {
		this.projectEquipment = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/equipment`);
		return this.projectEquipment;
	}

	removeProject(key: string) {
		this.projects.remove(key)
			.then(response => console.log("success"))
			.catch(error => console.log("error", error));
	}

	// Add stuff to projects

	addLaborCostToProject(labor) {
		this.projectToUpdate = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/labor`);
		this.projectToUpdate.push(labor);
	}

	addMaterialToProject(material) {
		this.projectToUpdate = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/materials`);
		this.projectToUpdate.push(material);
	}

	addEquipmentCostToProject(equipment) {
	
		this.projectToUpdate = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/equipment`);
		this.projectToUpdate.push(equipment);
	}

	removeLabor(key) {
		
		this.laborToRemove = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/labor`);
		this.laborToRemove.remove(this.updatingProjectKey)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	removeMaterial(key) {
		
		this.materialsToRemove = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/materials`);
		this.materialsToRemove.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	removeEquipment(key) {
		this.equipmentToRemove = this.db.list(`/projects/${this.userId}/${this.updatingProjectKey}/equipment`);
		this.equipmentToRemove.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	
}