import { Component, Input, ComponentFactoryResolver, AfterViewInit, OnInit, Directive, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { BidService } from '../bids.service';
import { Bid } from '../bid.model';
import { Router } from '@angular/router';
import { BidEquipmentComponent } from '../bid-item/bid-equipment/bid-equipment.component';
import { BidLaborComponent } from '../bid-item/bid-labor/bid-labor.component';
import { BidMaterialComponent } from '../bid-item/bid-material/bid-material.component';
import { DynamicBidComponent } from '../dynamic-bid.component';
import { Subscription } from 'rxjs/Subscription';
import { MaterialService } from '../material.service';
import { MaterialBid } from '../material.model';
import { LaborService } from '../labor.service';
import { LaborBid } from '../labor.model';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.css']
})
export class NewBidComponent implements OnInit {

  @ViewChild('bidData', { read: ViewContainerRef}) target: ViewContainerRef;
  
  private componentRef: ComponentRef<any>;
  newBid = <any>{};
  projectMaterials: MaterialBid[];
  projectLabor: LaborBid[];

  //bid: Bid = new Bid();
  @Input() value: string;


  componentData = null;
  subscription: Subscription;


  constructor(
    private bidService: BidService,
    private laborService: LaborService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private materialService: MaterialService
   ) { 
  }


  ngOnInit() {
  }

  createNewProject(newBid) {
  	var newBidName = newBid.newBidName;
  	var newBidLocation = newBid.newBidLocation;
  	console.log(newBidName);
  	console.log(newBidLocation);

    // Add materials to bid
    var materialsToBid = this.materialService.getMaterials();
    console.log(materialsToBid);

    // Add labor to bid
    var laborToBid = this.laborService.getLabor()
    console.log(laborToBid);
    this.newBid = {
      newBidName: newBidName,
      newBidLocation: newBidLocation,
      materials: materialsToBid,
      labor: laborToBid
    }
    console.log('creating new bid');
    console.log(newBid);
    this.bidService.createBid(newBid);
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

}
