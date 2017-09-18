import { Component, Input, ComponentFactoryResolver, AfterViewInit, OnInit, Directive, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { ProjectService } from '../../projects.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  
  @Input() value: string;


  componentData = null;
  subscription: Subscription;

  constructor(
  	private projectService: ProjectService,
  	private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  createNewProject(newBid) {
  	
  }

  createMaterialInput() {
    
  }

  createEquipmentInput() {
    
  }

  createLaborInput() {
    
  }

}
