
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MaterialBid } from './material.model';

@Injectable()
export class MaterialService {

	// Materials changed
	materialsChanged = new Subject<MaterialBid[]>();
	materials: MaterialBid[] = []

	// Add materials
	addMaterials(material: MaterialBid) {
		this.materials.push(material);
		console.log(this.materials);
		this.materialsChanged.next(this.materials.slice());

	}

	// Delete materials
	deleteMaterials(material) {
		let materialIndex = this.materials.indexOf(material);
		console.log(materialIndex);
		this.materials.splice(materialIndex, 1);
		this.materialsChanged.next(this.materials.slice());
		return this.materialsChanged;
	}

	// Get all materials
	getMaterials() {
		return this.materials.slice();
	}

}