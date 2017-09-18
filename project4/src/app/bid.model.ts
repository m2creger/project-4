import { MaterialBid } from './material.model';

export class Bid {
	public $key: string;
	public userId: string;
	public bidName: string;
	public bidLocation: string;
	public timestamp: number;
	public materials: MaterialBid[];

	constructor(key: string, userId: string, bidName: string, bidLocation: string, timestamp: number, materials: MaterialBid[]) {
		this.$key = key;
		this.userId = userId;
		this.bidName = bidName;
		this.bidLocation = bidLocation;
		this.timestamp = timestamp;
		this.materials = materials;
	}
}