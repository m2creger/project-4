import { Component, Input, ComponentFactoryResolver, AfterViewInit, OnInit, Directive, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../../projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectEquipmentComponent } from '../project-equipment/project-equipment.component';
import { ProjectMaterialsComponent } from '../project-materials/project-materials.component';
import { ProjectLaborComponent } from '../project-labor/project-labor.component';
import { DynamicProjectComponent } from '../../dynamic-project.component';


import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-project-costs',
  templateUrl: './project-costs.component.html',
  styleUrls: ['./project-costs.component.css']
})
export class ProjectCostsComponent implements OnInit {
  date: Date;
  id;
  subscription: Subscription;
  currentEditingProject = <any>{}
  private componentRef: ComponentRef<any>;
  @ViewChild('projectData', { read: ViewContainerRef}) target: ViewContainerRef;
  project: FirebaseObjectObservable<any>;

  constructor(
  	private projectService: ProjectService,
  	private router: Router,
  	private componentFactoryResolver: ComponentFactoryResolver,
  	private viewContainerRef: ViewContainerRef,
  	private route: ActivatedRoute,

  ) {
    this.date = new Date();
  }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  	this.projectService.getProject(this.id)
  		.subscribe(response =>this.currentEditingProject = response)
    console.log(this.currentEditingProject);
  }

  createMaterialInput() {
    let projectMaterialComponent = this.componentFactoryResolver.resolveComponentFactory(ProjectMaterialsComponent);
    this.componentRef = this.target.createComponent(projectMaterialComponent);
  }

  createEquipmentInput() {
    let projectEquipmentComponent = this.componentFactoryResolver.resolveComponentFactory(ProjectEquipmentComponent);
    this.componentRef = this.target.createComponent(projectEquipmentComponent);

  }

  createLaborInput() {
    let projectLaborComponent = this.componentFactoryResolver.resolveComponentFactory(ProjectLaborComponent);
    this.componentRef = this.target.createComponent(projectLaborComponent);
  }

  didFinishAdding() {
  	this.router.navigate(['projectdetail', this.id]);
  }

  close() {
    this.router.navigate(['projects']);
  }

}
