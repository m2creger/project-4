import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { LaborBid } from '../../labor.model';
import { Subscription } from 'rxjs/Subscription';
import { LaborService } from '../../labor.service';

@Component({
  selector: 'app-bid-labor',
  templateUrl: './bid-labor.component.html',
  styleUrls: ['./bid-labor.component.css']
})
export class BidLaborComponent implements OnInit {
  @ViewChild('laborCostInput') costInputRef: ElementRef;
  @ViewChild('laborTypeInput') laborInputRef: ElementRef;
  newLabor = <any>{}

  constructor(
  	private injector: Injector,
  	private laborService: LaborService
  ) { }

  ngOnInit() {
  }

  addLaborToBid() {
  	const laborType = this.laborInputRef.nativeElement.value;
  	const costType = this.costInputRef.nativeElement.value;
  	this.newLabor = { laborType: laborType, laborRate: costType}
    this.laborService.addLabor(this.newLabor);
  }

}
