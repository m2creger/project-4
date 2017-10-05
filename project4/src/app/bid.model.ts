import { MaterialBid } from './material.model';
import { LaborBid } from './labor.model';
import { EquipmentBid } from './equipment-bid.model';

export class Bid {
	public $key: string;
	public userId: string;
	public bidName: string;
	public bidLocation: string;
	public timestamp: number;
	public materials: MaterialBid[];
	public labor: LaborBid[];
	public equipment: EquipmentBid[];

	constructor(key: string, userId: string, bidName: string, bidLocation: string, timestamp: number, materials: MaterialBid[], labor: LaborBid[], equipment: EquipmentBid[]) {
		this.$key = key;
		this.userId = userId;
		this.bidName = bidName;
		this.bidLocation = bidLocation;
		this.timestamp = timestamp;
		this.materials = materials;
		this.labor = labor;
		this.equipment = equipment;
	}
}