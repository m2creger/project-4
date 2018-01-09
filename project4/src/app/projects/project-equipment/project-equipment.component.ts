import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs/Subscription';
import { ProjectService } from '../../projects.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-equipment',
  templateUrl: './project-equipment.component.html',
  styleUrls: ['./project-equipment.component.css'],
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
export class ProjectEquipmentComponent implements OnInit {

  @ViewChild('equipmentTypeInput') equipmentTypeRef: ElementRef;
  @ViewChild('equipmentHourInput') equipmentHourRef: ElementRef;
  @ViewChild('equipmentCostInput') costInputRef: ElementRef;
  clickInfo = 'default';
  equipmentCost;
  
  constructor(
  	private projectService: ProjectService,
  	private _flashMessagesService: FlashMessagesService,
    private injector: Injector
  ) { }

  ngOnInit() {

  }

  addEquipmentToProject() {
  	const equipmentType = this.equipmentTypeRef.nativeElement.value;
    const equipmentHours = this.equipmentHourRef.nativeElement.value;
    const equipmentCost = this.costInputRef.nativeElement.value;

    this.equipmentCost = {
      equipmentType: equipmentType,
      equipmentHours: equipmentHours,
      equipmentCost: equipmentCost
    }

    this.projectService.addEquipmentCostToProject(this.equipmentCost);
    this._flashMessagesService.show('Successfully added equipment to bid!', { cssClass: 'alert-success', timeout: 1000 });
    this.clickInfo = 'clicked';
  }

}
