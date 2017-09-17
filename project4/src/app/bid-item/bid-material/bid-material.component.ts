import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MaterialBid } from '../../material.model';
@Component({
  selector: 'app-bid-material',
  templateUrl: './bid-material.component.html',
  styleUrls: ['./bid-material.component.css']
})
export class BidMaterialComponent implements OnInit {
  @ViewChild('materialInput') materialInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;
  materialAdded = new EventEmitter<{material: string, cost: number}>();
  constructor(private injector: Injector) { }

  ngOnInit() {
  }

  addMaterialToBid() {

  }

}
