
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MaterialBid } from './material.model';

@Injectable()
export class MaterialService {
	materialsChanged = new Subject<MaterialBid[]>();
	materials: MaterialBid[] = []

	// Add materials
	addMaterials(material: MaterialBid) {
		this.materials.push(material);
		console.log(this.materials);
		this.materialsChanged.next(this.materials.slice());

	}

	deleteMaterials(material) {

	}

	getMaterials() {
		return this.materials.slice();
	}

}