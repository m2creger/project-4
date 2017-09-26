import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Bid } from '../bid.model';
import { BidService } from '../bids.service';
import { Subject } from 'rxjs/Subject';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-bid-index',
  templateUrl: './bid-index.component.html',
  styleUrls: ['./bid-index.component.css']
})
export class BidIndexComponent implements OnInit {
  //bids: Bid[];
  private subscription;
  userId: string;
  currentBid = <any>{}
  bids: FirebaseListObservable<any>;
  bid: FirebaseObjectObservable<Bid>;
  bidsMessage = "No current bids";
  currentBidSubject = new Subject<any>();
  bidToConvert = <any>{}
  newProject = <any>{}
  
  constructor(
      private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
  		private bidService: BidService,
  		private route: ActivatedRoute,
  		private router: Router,
      private projectService: ProjectService
  ) { 
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      if (user) this.userId = user.uid;
    })
  }

  deleteBid(key: string) {
    this.bids.remove(key);
  }

  editBid(key: string) {

    this.router.navigate(['createbid', key]);
  }

  bidDetail(key: string) {
    this.router.navigate(['showbid', key]);
  }


  ngOnInit() {
    this.bids = this.db.list(`bids/${this.userId}`);
    console.log(this.bids);

  }
  ngOnDestroy() {
   
  }

  convertToProject(key) {
    this.bidService.getBid(key)
      .subscribe(bid => this.bidToConvert = bid);
    this.newProject = this.bidToConvert;
    console.log(this.newProject);
    this.projectService.createProject(this.newProject);
    console.log('added to project')
    this.bidService.removeBid(key);

    // Add a notification letting user know bid was converted
  }
 

}
