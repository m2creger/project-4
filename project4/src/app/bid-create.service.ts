import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';

import { BidEquipmentComponent } from './bid-item/bid-equipment/bid-equipment.component';
import { BidMaterialComponent } from './bid-item/bid-material/bid-material.component';
import { BidLaborComponent } from './bid-item/bid-labor/bid-labor.component';

@Injectable()

export class BidCreateService {
	constructor(
		@Inject(ComponentFactoryResolver) factoryResolver
	) {
		//this.factoryResolver = factoryResolver
 	}
}