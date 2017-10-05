import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { CompanyEquipment } from './company-equipment.model';

@Injectable()
export class EquipmentService {
	equipmentChanged = new Subject<CompanyEquipment[]>();
	allEquipment: FirebaseListObservable<any>;
	equipment: FirebaseObjectObservable<any>;

	userId: string;
	updatingEquipment;

	constructor( 
		private router: Router,
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth

	) {
		this.afAuth.authState.subscribe(user => {
			if (user) this.userId = user.uid;
		})
	}

	getAllEquipment(): FirebaseListObservable<CompanyEquipment[]> {
		if (!this.userId) return;

		this.allEquipment = this.db.list(`equipment/${this.userId}`);
	
		return this.allEquipment;
	}

	createNewEquipment(equipment: CompanyEquipment): void {
		equipment.userId = this.userId;
		this.allEquipment.push(equipment).then((equipment) => {
			console.log(equipment);
		})
		this.router.navigate(['equipment']);
	}

	deleteEquipment(key: string) {
		this.allEquipment.remove(key)
			.then(response => console.log("success"))
			.catch(error => console.log("Error", error));
	}
}