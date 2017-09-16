export class Bid {
	public $key: string;
	public userId: string;
	public bidName: string;
	public bidLocation: string;
	public timestamp: number;

	constructor(key: string, bidName: string, bidLocation: string, timestamp: number) {
		this.$key = key;
		this.bidName = bidName;
		this.bidLocation = bidLocation;
		this.timestamp = timestamp;
	}
}