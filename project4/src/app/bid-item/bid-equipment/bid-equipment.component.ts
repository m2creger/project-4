import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { BidService } from '../../bids.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bid-equipment',
  templateUrl: './bid-equipment.component.html',
  styleUrls: ['./bid-equipment.component.css'],
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
export class BidEquipmentComponent implements OnInit {
  
  @ViewChild('equipmentTypeInput') equipmentTypeRef: ElementRef;
  @ViewChild('equipmentHourInput') equipmentHourRef: ElementRef;
  @ViewChild('equipmentCostInput') costInputRef: ElementRef;

  subscription: Subscription;

  newEquipment = <any>{};
  equipmentBid;
  bid: FirebaseObjectObservable<any>;
  editingBid;
  clickInfo = 'default';

  constructor(
    private bidService: BidService,
    private _flashMessagesService: FlashMessagesService,
    private injector: Injector
   ) { }

  ngOnInit() {
  }

  addEquipmentToBid() {
    const equipmentType = this.equipmentTypeRef.nativeElement.value;
    const equipmentHours = this.equipmentHourRef.nativeElement.value;
    const equipmentCost = this.costInputRef.nativeElement.value;

    this.equipmentBid = {
      equipmentType: equipmentType,
      equipmentHours: equipmentHours,
      equipmentCost: equipmentCost
    }

    this.bidService.addEquipmentToBid(this.equipmentBid);
    this._flashMessagesService.show('Successfully added equipment to bid!', { cssClass: 'alert-success', timeout: 1000 });
    this.clickInfo = 'clicked';

  }

}
