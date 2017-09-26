import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LaborBid } from './labor.model';


@Injectable()

export class LaborService {

	laborChanged = new Subject<LaborBid[]>();
	allLabor: LaborBid[] = []

	addLabor(labor: LaborBid, key: string) {
		this.allLabor.push(labor);
		console.log(this.allLabor);
		this.laborChanged.next(this.allLabor.slice());
	}

	deleteLabor(labor) {
		let laborIndex = this.allLabor.indexOf(labor);
		console.log(laborIndex);
		this.allLabor.splice(laborIndex, 1);
		this.laborChanged.next(this.allLabor.slice());
		return this.laborChanged;

	}

	getLabor() {
		return this.allLabor.slice();
	}
}