import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProjectService } from '../../projects.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-labor',
  templateUrl: './project-labor.component.html',
  styleUrls: ['./project-labor.component.css'],
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
export class ProjectLaborComponent implements OnInit {

  @ViewChild('laborCostInput') costInputRef: ElementRef;
  @ViewChild('laborTypeInput') laborInputRef: ElementRef;
  @ViewChild('laborHourInput') laborHourRef: ElementRef;

  newLabor = <any>{};
  project: FirebaseObjectObservable<any>;
  subscription: Subscription;
  laborAdded = new EventEmitter<any>();
  clickInfo = 'default';
  
  constructor(
  	private _flashMessagesService: FlashMessagesService,
  	private injector: Injector,
  	private projectService: ProjectService
  	
  ) { }

  ngOnInit() {
  }

  addLaborToProject() {
  	const laborType = this.laborInputRef.nativeElement.value;
    const laborHours = this.laborHourRef.nativeElement.value;
  	const costType = this.costInputRef.nativeElement.value;
  	this.newLabor = { laborType: laborType, laborRate: costType, laborHours: laborHours}
    this.projectService.addLaborCostToProject(this.newLabor);
    this._flashMessagesService.show('Successfully Added!', { cssClass: 'alert-success', timeout: 1000 });
    this.clickInfo = 'clicked';
  }

}
