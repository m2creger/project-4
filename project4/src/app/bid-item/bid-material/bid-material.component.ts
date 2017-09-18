import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MaterialBid } from '../../material.model';
import { Subscription } from 'rxjs/Subscription';
import { MaterialService } from '../../material.service';
@Component({
  selector: 'app-bid-material',
  templateUrl: './bid-material.component.html',
  styleUrls: ['./bid-material.component.css']
})

export class BidMaterialComponent implements OnInit {
  
  @ViewChild('materialInput') materialInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;
  materials: MaterialBid[];

  newMaterial = <any>{};

  materialAdded = new EventEmitter<MaterialBid>();
  constructor(
  	private injector: Injector,
  	private materialService: MaterialService
  ) { }

  ngOnInit() {
  }

  addMaterialToBid() {
  	const matType = this.materialInputRef.nativeElement.value;
  	const matCost = this.costInputRef.nativeElement.value;
  	this.newMaterial = {materialType: matType, materialCost: matCost};
  	this.materialService.addMaterials(this.newMaterial);
  }

}
