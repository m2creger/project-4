import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { ProjectService } from '../../projects.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  
  project: FirebaseObjectObservable<any>;
  id;
  materials: FirebaseListObservable<any>;
  equipment: FirebaseListObservable<any>;
  labor: FirebaseListObservable<any>;
  materialCosts;
  equipmentCosts;
  laborCosts;
  totalCosts;
  view_active = true;

  constructor(
  	private route: ActivatedRoute,
  	private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  	this.materialCosts = 0;
  	this.equipmentCosts = 0;
  	this.laborCosts = 0;
    this.totalCosts = 0;
  	this.getProjectDetail();

    this.materials = this.projectService.getProjectMaterials(this.id);
    this.equipment = this.projectService.getProjectEquipment(this.id);
    this.labor = this.projectService.getProjectLabor(this.id);

  }

  deleteMaterial(key) {
  
    this.projectService.removeMaterial(key);
  }

  deleteEquipment(key) {
  
    this.projectService.removeEquipment(key);
  }

  deleteLabor(key) {

    this.projectService.removeLabor(key);
  }

  getProjectDetail() {
    
  	this.projectService.getProject(this.id).subscribe(
  		response => {
        this.totalCosts = 0;
  			this.project = response;
  		
  			this.projectService.getProjectMaterials(this.id)
  				.subscribe(
  					response => {

              this.compileMaterialCosts(response);
      
  				})
  			this.projectService.getProjectLabor(this.id)
  				.subscribe(
  					response => {
           
  						this.compileLaborCosts(response);
  				})
  			this.projectService.getProjectEquipment(this.id)
  				.subscribe(
  					response => {
                
                this.compileEquipmentCosts(response);
              
  					}
  				)
  		})
  }

  close() {
    this.router.navigate(['allprojects']);
  }

  calculateTotalCosts() {
    this.totalCosts = (parseInt(this.equipmentCosts) + parseInt(this.laborCosts) + parseInt(this.equipmentCosts));
    console.log(this.totalCosts);
  }

  compileMaterialCosts(materials) {

    var currentCost = 0;
    var currentMaterialCosts = 0;
    for (var i = 0; i < materials.length; i++) {
 
      currentCost = materials[i].materialCost * materials[i].materialQuantity;
      currentMaterialCosts += currentCost;
    }
    this.materialCosts = currentMaterialCosts;
    this.totalCosts += this.materialCosts;
  }

  compileLaborCosts(labor) {
  
    var currentCost = 0;
    var currentLaborCosts = 0;
    for (var i = 0; i < labor.length; i++) {
   
      currentCost = labor[i].laborHours * labor[i].laborRate;
      currentLaborCosts += currentCost;
    }
    this.laborCosts = currentLaborCosts;
    this.totalCosts += this.laborCosts;
  }

  compileEquipmentCosts(equipment) {
    
    var currentCost = 0;
    var currentEquipmentCosts = 0;
    for (var i = 0; i < equipment.length; i++) {
   
      currentCost = equipment[i].equipmentCost * equipment[i].equipmentHours;
      currentEquipmentCosts += currentCost;
    }
    this.equipmentCosts = currentEquipmentCosts;
    this.totalCosts += this.equipmentCosts;
  }

  ngOnDestroy() {

    this.view_active = false;
  
  }

}
