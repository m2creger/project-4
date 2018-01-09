import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { BidService } from '../../bids.service';
import { MaterialBid } from '../../material.model';

@Component({
  selector: 'app-bid-package',
  templateUrl: './bid-package.component.html',
  styleUrls: ['./bid-package.component.css']
})
export class BidPackageComponent implements OnInit {
  
  bid: FirebaseObjectObservable<any>;
  id;
  materials = <any>{};
  equipment = <any>{};
  labor = <any>{};
  materialCosts;
  equipmentCosts;
  laborCosts;
  totalCosts;
  bidMaterials = <any>{};
  bidLabor = <any>{};
  bidEquipment = <any>{};


  constructor(
  	private bidService: BidService,
    private router: Router,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.materialCosts = 0;
    this.equipmentCosts = 0;
    this.laborCosts = 0;
    this.totalCosts = 0;
   
    this.getBidDetail();
  }

  getBidDetail() {
  	this.id = this.route.snapshot.paramMap.get('id');
    
    this.bidMaterials = this.bidService.getBidMaterials(this.id);
    this.bidLabor = this.bidService.getBidLabor(this.id);
    this.bidEquipment = this.bidService.getBidEquipment(this.id);
    this.bidService.getBid(this.id).subscribe(
       response => {
         this.bid = response;
         
         this.bidService.getBidMaterials(this.id)
          .subscribe(
            response => {
              
              this.compileMaterialCosts(response);
              
           })
          this.bidService.getBidLabor(this.id)
            .subscribe(
              response => {
                
                this.compileLaborCosts(response);
            })
          this.bidService.getBidEquipment(this.id)
            .subscribe(
              response => {
               
                this.compileEquipmentCosts(response);
               
           })
         
     })

    //this.materials = this.bidService.getBidMaterials(this.id);  
     
  
    this.equipment = this.bidService.getBidEquipment(this.id);

    this.labor = this.bidService.getBidLabor(this.id);

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
  close() {
    this.router.navigate(['allprojects']);
  }




}
