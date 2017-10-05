import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Bid } from './bid.model';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MaterialBid } from './material.model';
import { EquipmentBid } from './equipment-bid.model';
import { LaborBid } from './labor.model';

@Injectable()
export class BidService {
	
	bidsChanged = new Subject<Bid[]>();
	private basePath: string = '/bids';
	mappedBids: Observable<any[]>;
	private bidMaterialCosts = new Subject<any>();
	bids: FirebaseListObservable<any>;
	bid: FirebaseObjectObservable<Bid>;

	bidMaterials: FirebaseListObservable<any>;
	bidEquipment: FirebaseListObservable<any>;
	bidLabor: FirebaseListObservable<any>;

	laborToRemove: FirebaseListObservable<any>;
	materialsToRemove: FirebaseListObservable<any>;
	equipmentToRemove: FirebaseListObservable<any>;

	userId: string;
	newBid = new Subject<any>();
	updatingBidKey;
	showBidKey;
	bidToUpdate;

	
	totalEquipmentCosts: number;
	totalLaborCosts: number;

	constructor(
		private router: Router,
		private db: AngularFireDatabase,
		private afAuth: AngularFireAuth
	) { 
		this.afAuth.authState.subscribe(user => {
			
			if (user) this.userId = user.uid;
		})
	}

	// Get all bids from firebase
	getBidsList(): FirebaseListObservable<Bid[]>{
		// No user id return
		if (!this.userId) return;
		// 
		this.bids = this.db.list(`bids/${this.userId}`);
		//this.bidsChanged = this.bids;
		return this.bids;
	}

	getBid(key): FirebaseObjectObservable<any> {
		this.updatingBidKey = key;
		this.bid = this.db.object(`/bids/${this.userId}/${key}`);

		console.log("getting bid from firebase");
		console.log(this.bid);
		//this.parseBid();
		return this.bid;
	}

	// Create bid to send to firebase
	createBid(bid: Bid): void {
		console.log("Creating bid");
		console.log(bid);
		console.log(this.userId);
		bid.userId = this.userId;
		this.bids.push(bid).then((bid) => {
			console.log(bid);
			this.newBid.next(bid);
		})
		this.router.navigate(['allbids']);
		// this.bids.remove(key)
		// 	.catch(error => this.handleError(error))
	}

	removeBid(key: string) {
		this.bids.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	// handle firebase errors
	private handleError(error) {
		console.log(error)
	}

	addLaborToBid(labor) {
		console.log(labor);
		this.bidToUpdate = this.db.list(`/bids/${this.userId}/${this.updatingBidKey}/labor`);
		this.bidToUpdate.push(labor);
	}

	addMaterialToBid(material) {
		console.log(material);
		this.bidToUpdate = this.db.list(`/bids/${this.userId}/${this.updatingBidKey}/materials`);
		this.bidToUpdate.push(material);

	}

	addEquipmentToBid(equipment) {
		console.log(equipment);
		this.bidToUpdate = this.db.list(`/bids/${this.userId}/${this.updatingBidKey}/equipment`);
		this.bidToUpdate.push(equipment);

	}

	getBidMaterials(key) : FirebaseListObservable<MaterialBid[]>{
		this.showBidKey = key;
		this.bidMaterials = this.db.list(`/bids/${this.userId}/${this.showBidKey}/materials`)
		
		console.log(this.bidMaterials);

		return this.bidMaterials;
	}

	getBidLabor(key) : FirebaseListObservable<LaborBid[]> {
		// this.showBidKey = key;
		this.bidLabor = this.db.list(`/bids/${this.userId}/${key}/labor`);
		return this.bidLabor;
	}

	getBidEquipment(key): FirebaseListObservable<EquipmentBid[]> {
		// this.showBidKey = key;
		this.bidEquipment = this.db.list(`/bids/${this.userId}/${key}/equipment`);
		return this.bidEquipment;
	}

	removeLabor(key) {
		
		this.laborToRemove = this.db.list(`/bids/${this.userId}/${this.showBidKey}/labor`);
		this.laborToRemove.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	removeMaterial(key) {
		this.materialsToRemove = this.db.list(`/bids/${this.userId}/${this.showBidKey}/materials`);
		this.materialsToRemove.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	removeEquipment(key) {
		this.equipmentToRemove = this.db.list(`/bids/${this.userId}/${this.showBidKey}/equipment`);
		this.equipmentToRemove.remove(key)
			.then(response => console.log('success'))
			.catch(error => console.log("Error", error));
	}

	getBidMaterialCosts(): Observable<any> {
		return this.bidMaterialCosts.asObservable();
	}

	clearBidMaterialCost() {
		this.bidMaterialCosts.next(0);
	}

	
}