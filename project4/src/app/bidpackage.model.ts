import { MaterialBid } from './material.model';
import { LaborBid } from './labor.model';
import { EquipmentBid } from './equipment-bid.model';


export class BidPackage {
	public $key: string;
	public userId: string;
	public projectName: string;
	public projectLocation: string;
	public materials: MaterialBid[];
	public labor: LaborBid[];
	public equipment: EquipmentBid[];

	constructor(key: string, userId: string, projectName: string, projectLocation: string, materials: MaterialBid[], labor: LaborBid[], equipment: EquipmentBid[]) {
		this.$key = key;
		this.userId = userId;
		this.projectName = projectName;
		this.projectLocation = projectLocation;
		this.materials = materials;
		this.labor = labor;
		this.equipment = equipment;
	}

}