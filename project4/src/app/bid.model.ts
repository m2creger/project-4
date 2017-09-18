import { MaterialBid } from './material.model';
import { LaborBid } from './labor.model';

export class Bid {
	public $key: string;
	public userId: string;
	public bidName: string;
	public bidLocation: string;
	public timestamp: number;
	public materials: MaterialBid[];
	public labor: LaborBid[];

	constructor(key: string, userId: string, bidName: string, bidLocation: string, timestamp: number, materials: MaterialBid[], labor: LaborBid[]) {
		this.$key = key;
		this.userId = userId;
		this.bidName = bidName;
		this.bidLocation = bidLocation;
		this.timestamp = timestamp;
		this.materials = materials;
		this.labor = labor;
	}
}