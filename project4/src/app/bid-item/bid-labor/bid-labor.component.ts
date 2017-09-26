import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { LaborBid } from '../../labor.model';
import { Subscription } from 'rxjs/Subscription';
import { LaborService } from '../../labor.service';
import { BidService } from '../../bids.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-bid-labor',
  templateUrl: './bid-labor.component.html',
  styleUrls: ['./bid-labor.component.css']
})

export class BidLaborComponent implements OnInit {
  @ViewChild('laborCostInput') costInputRef: ElementRef;
  @ViewChild('laborTypeInput') laborInputRef: ElementRef;
  @ViewChild('laborHourInput') laborHourRef: ElementRef;

  newLabor = <any>{}
  bid: FirebaseObjectObservable<any>;
  subscription: Subscription;
  laborAdded = new EventEmitter<LaborBid>();

  constructor(
    private _flashMessagesService: FlashMessagesService,
  	private injector: Injector,
  	private laborService: LaborService,
    private bidService: BidService
  ) { }

  ngOnInit() {
  }

  addLaborToBid() {
  	const laborType = this.laborInputRef.nativeElement.value;
    const laborHours = this.laborHourRef.nativeElement.value;
  	const costType = this.costInputRef.nativeElement.value;
  	this.newLabor = { laborType: laborType, laborRate: costType, laborHours: laborHours}
    this.bidService.addLaborToBid(this.newLabor);
    this._flashMessagesService.show('Successfully Added!', { cssClass: 'alert-success', timeout: 1000 });
    
  }

}
