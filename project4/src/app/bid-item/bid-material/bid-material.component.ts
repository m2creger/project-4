import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MaterialBid } from '../../material.model';
import { Subscription } from 'rxjs/Subscription';
import { MaterialService } from '../../material.service';
import { BidService } from '../../bids.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-bid-material',
  templateUrl: './bid-material.component.html',
  styleUrls: ['./bid-material.component.css'],
  animations: [
    trigger('clickedState', [
        state('default', style({
          backgroundColor: 'gray'
        })),
        state('clicked', style ({
          backgroundColor: 'green'
        })),
        transition('default => clicked', animate('200ms 500ms ease-in'))
      ])
  ]
})

export class BidMaterialComponent implements OnInit {
  
  @ViewChild('materialInput') materialInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @ViewChild('unitOfMeasurement') measurementInputRef: ElementRef;

  materials: MaterialBid[];
  subscription: Subscription;
  newMaterial = <any>{};
  bid: FirebaseObjectObservable<any>;
  materialAdded = new EventEmitter<MaterialBid>();
  editingBid;
  buttonClicked = false;
  clickInfo = 'default';

  constructor(
    private _flashMessagesService: FlashMessagesService,
  	private injector: Injector,
  	private materialService: MaterialService,
    private bidService: BidService
  ) { }

  ngOnInit() {
   
  }

  addMaterialToBid() {
  	const matType = this.materialInputRef.nativeElement.value;
    const matQty = this.quantityInputRef.nativeElement.value;
    const matMeas = this.measurementInputRef.nativeElement.value;
  	const matCost = this.costInputRef.nativeElement.value;
  	this.newMaterial = {materialType: matType, materialQuantity: matQty, materialMeasurement: matMeas, materialCost: matCost};
  	this.bidService.addMaterialToBid(this.newMaterial);
    this._flashMessagesService.show('Successfully Added!', { cssClass: 'alert-success', timeout: 1000 });
    this.clickInfo = 'clicked';
  }

}
