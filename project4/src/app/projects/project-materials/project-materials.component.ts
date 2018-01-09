import { Component, OnInit, Injector, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ProjectService } from '../../projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService } from 'angular2-flash-messages';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-materials',
  templateUrl: './project-materials.component.html',
  styleUrls: ['./project-materials.component.css'],
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
export class ProjectMaterialsComponent implements OnInit {
  
  id;
  projectMaterials = <any>{};
  newMaterial = <any>{};
  materialAdded = new EventEmitter<any>();
  @ViewChild('materialInput') materialInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @ViewChild('unitOfMeasurement') measurementInputRef: ElementRef;
  clickInfo = 'default';

  subscription: Subscription;

  constructor(
    private _flashMessagesService: FlashMessagesService,
  	private route: ActivatedRoute,
  	private projectService: ProjectService
  ) { }

  ngOnInit() {
  	this.getProjectMaterials();
  }

  getProjectMaterials() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.projectService.getProjectMaterials(this.id).subscribe(
  		response => {
  			this.projectMaterials = response;
  		}
  	)

  }

  addMaterialToProject() {
    const matType = this.materialInputRef.nativeElement.value;
    const matQty = this.quantityInputRef.nativeElement.value;
    const matMeas = this.measurementInputRef.nativeElement.value;
    const matCost = this.costInputRef.nativeElement.value;
    this.newMaterial = {materialType: matType, materialQuantity: matQty, materialMeasurement: matMeas, materialCost: matCost};
    this.projectService.addMaterialToProject(this.newMaterial);
    this._flashMessagesService.show('Successfully Added!', { cssClass: 'alert-success', timeout: 1000 });
    this.clickInfo = 'clicked';
  }

}
