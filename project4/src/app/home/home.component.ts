import { Component, OnInit } from '@angular/core';
import { BidService } from '../bids.service';
import { fadeInAnimation } from '../_animations/index';
import { ProjectService } from '../projects.service';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';
import { EquipmentService } from '../equipment.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]' : ''}
})
export class HomeComponent implements OnInit {
  photoBids: string;
  photoProjects: string;
  currentUser = <any>{}
  userId: string;
  userEmail: string;

  constructor(
    private router: Router,
    private bidService: BidService,
    private projectService: ProjectService,
    private workerService: WorkerService,
    private equipmentService: EquipmentService,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) {
      this.afAuth.authState.subscribe(user => {
        console.log(user);
        if (user) this.userId = user.uid;
        this.userEmail = user.email;
      })
    }

  ngOnInit() {
    this.getUser();
    this.workerService.getWorkers();
    this.equipmentService.getAllEquipment();
    this.bidService.getBidsList();
    this.projectService.getProjectsList();
    this.bidService.clearBidMaterialCost();
  	this.photoBids = '/assets/images/pexels-photo-259966.jpeg';
  	this.photoProjects = '/assets/images/pexels-photo-443383.jpeg';
  }

  showWorkers() {
    this.router.navigate(['workers']);
  }

  showEquipment() {
    this.router.navigate(['equipment']);
  }

  getUser() {
    console.log("*******getting user");
    console.log(this.userId);
    this.currentUser = this.db.list('/users',
        ref => ref.orderByChild('userId').equalTo(this.userId)
      );
  
  }

}
