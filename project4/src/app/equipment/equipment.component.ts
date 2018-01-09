import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  newEquipment = <any>{};
  allEquipment: FirebaseListObservable<any>;
  userId: string;
  
  constructor(
     private afAuth: AngularFireAuth,
     private db: AngularFireDatabase,
     private route: ActivatedRoute,
     private router: Router,
     private equipmentService: EquipmentService
   ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    })
  }

  ngOnInit() {

    this.allEquipment = this.db.list(`equipment/${this.userId}`);
    console.log(this.allEquipment);
  } 

  deleteEquipment(key) {
    this.equipmentService.deleteEquipment(key);
  }

  createNewEquipment(newEquipment) {
    console.log("creating new equipment");
    const equipmentType = newEquipment.equipmentType;
    const equipmentYear = newEquipment.equipmentYear;
    const equipmentMake = newEquipment.equipmentMake;
    const equipmentModel = newEquipment.equipmentModel;

    this.newEquipment = {
      equipmentType: equipmentType,
      equipmentYear: equipmentYear,
      equipmentMake: equipmentMake,
      equipmentModel: equipmentModel
    }
    this.equipmentService.createNewEquipment(this.newEquipment);
  }

  close() {
    this.router.navigate(['home']);
  }


}
