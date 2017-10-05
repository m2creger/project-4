import { Component, Input, ComponentFactoryResolver, AfterViewInit, OnInit, Directive, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { NewBidComponent } from '../new-bid/new-bid.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BidService } from '../bids.service';
import { Bid } from '../bid.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BidEquipmentComponent } from '../bid-item/bid-equipment/bid-equipment.component';
import { BidLaborComponent } from '../bid-item/bid-labor/bid-labor.component';
import { BidMaterialComponent } from '../bid-item/bid-material/bid-material.component';
import { DynamicBidComponent } from '../dynamic-bid.component';
import { MaterialService } from '../material.service';
import { MaterialBid } from '../material.model';
import { LaborService } from '../labor.service';
import { LaborBid } from '../labor.model';
import { BidIndexComponent } from '../bid-index/bid-index.component';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.css']
})
export class BidCreateComponent implements OnInit {
  id;
  subscription: Subscription;
  newBid = <any>{};
  private componentRef: ComponentRef<any>;
  @ViewChild('bidData', { read: ViewContainerRef}) target: ViewContainerRef;
  bids: FirebaseListObservable<any>;
  bid: FirebaseObjectObservable<any>;
  bidMaterials: FirebaseListObservable<any>;
  bidEquipment: FirebaseListObservable<any>;
  bidLabor: FirebaseListObservable<any>;
  
  constructor(
  	private bidService: BidService,
    private laborService: LaborService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private materialService: MaterialService,
    private route: ActivatedRoute
  ) { 
  	
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.bidService.getBid(this.id)
      .subscribe(bid => this.newBid = bid)
    console.log(this.newBid);
    this.bidMaterials = this.bidService.getBidMaterials(this.id);
    this.bidLabor = this.bidService.getBidLabor(this.id);
    this.bidEquipment = this.bidService.getBidEquipment(this.id);
  }

  createMaterialInput() {
    let bidMaterialComponent = this.componentFactoryResolver.resolveComponentFactory(BidMaterialComponent);
    this.componentRef = this.target.createComponent(bidMaterialComponent);
  }

  createEquipmentInput() {
    let bidEquipmentComponent = this.componentFactoryResolver.resolveComponentFactory(BidEquipmentComponent);
    this.componentRef = this.target.createComponent(bidEquipmentComponent);

  }

  createLaborInput() {
    let bidLaborComponent = this.componentFactoryResolver.resolveComponentFactory(BidLaborComponent);
    this.componentRef = this.target.createComponent(bidLaborComponent);
  }

  createBid() {
    this.router.navigate(['showbid', this.id]);
  }

  close() {
    this.router.navigate(['bids']);
  }

  showBidDetail() {
    this.router.navigate(['showbid', this.id]);
  }

}
