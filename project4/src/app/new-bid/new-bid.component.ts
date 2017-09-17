import { Component, Input, ComponentFactoryResolver, AfterViewInit, OnInit, Directive, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { BidService } from '../bids.service';
import { Bid } from '../bid.model';
import { Router } from '@angular/router';
import { BidEquipmentComponent } from '../bid-item/bid-equipment/bid-equipment.component';
import { BidLaborComponent } from '../bid-item/bid-labor/bid-labor.component';
import { BidMaterialComponent } from '../bid-item/bid-material/bid-material.component';
import { DynamicBidComponent } from '../dynamic-bid.component';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.css']
})
export class NewBidComponent implements OnInit {
  @ViewChild('bidData', { read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  newBid = <any>{};
  //bid: Bid = new Bid();
  @Input() value: string;
  componentData = null;

  constructor(
    private bidService: BidService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
   ) { 

    //const bidEquipComp = this.componentFactoryResolver.resolveComponentFactory(BidEquipmentComponent);
    //const bidMatComp = this.componentFactoryResolver.resolveComponentFactory(BidMaterialComponent);
    //const bidLabComp = this.componentFactoryResolver.resolveComponentFactory(BidLaborComponent);


  }

  // renderComponent() {
  //   if (this.componentRef) this.componentRef.instance.value = this.value;
  // }

  ngOnInit() {
  }

  createNewProject(newBid) {
  	var newBidName = newBid.newBidName;
  	var newBidLocation = newBid.newBidLocation;
  	console.log(newBidName);
  	console.log(newBidLocation);
    this.newBid = {
      newBidName: newBidName,
      newBidLocation: newBidLocation
    }
    this.bidService.createBid(newBid);
  }

  createMaterialInput() {
    let bidMaterialComponent = this.componentFactoryResolver.resolveComponentFactory(BidMaterialComponent);
    this.componentRef = this.target.createComponent(bidMaterialComponent);
  }

  createEquipmentInput() {
    
  }

  createLaborInput() {
    
  }

}
