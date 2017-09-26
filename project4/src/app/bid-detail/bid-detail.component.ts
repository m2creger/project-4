import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

import { BidService } from '../bids.service';

@Component({
  selector: 'app-bid-detail',
  templateUrl: './bid-detail.component.html',
  styleUrls: ['./bid-detail.component.css']
})
export class BidDetailComponent implements OnInit {
  
  detailedBid = <any>{}
  bid: FirebaseObjectObservable<any>;
  id;
  materials = <any>{};
  equipment = <any>{};
  labor = <any>{};

  constructor(
  	private bidService: BidService,
  	private route: ActivatedRoute
 	) { }

  ngOnInit() {

    this.getBidDetail();
  }

  getBidDetail() {
  	this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.bidService.getBid(this.id)
      .subscribe(bid => this.detailedBid = bid)
    console.log(this.detailedBid);
    this.materials = this.bidService.getBidMaterials(this.id);
    console.log(this.materials);
    this.equipment = this.bidService.getBidEquipment(this.id);
    console.log(this.equipment)
    this.labor = this.bidService.getBidLabor(this.id);
    console.log(this.labor);
  }

  deleteMaterial(key) {
    console.log("deleting material");
    this.bidService.removeMaterial(key);
  }

  deleteEquipment(key) {
    console.log('deleting equipment');
    this.bidService.removeEquipment(key);
  }

  deleteLabor(key) {
    console.log('deleting labor');
    this.bidService.removeLabor(key);
  }

}
