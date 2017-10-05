import { BidPackage } from './bidpackage.model';

export class Project {
	public $key: string;
	public userId: string;
	public bidName: string;
	public bidLocation: string;
	public timestamp: number;
	public bidPackage: BidPackage;
	

	constructor(key: string, userId: string, bidName: string, bidLocation: string, timestamp: number, bidPackage: BidPackage) {
		this.$key = key;
		this.userId = userId;
		this.bidName = bidName;
		this.bidLocation = bidLocation;
		this.timestamp = timestamp;
		this.bidPackage = bidPackage;
	
	}
}