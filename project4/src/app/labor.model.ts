export class LaborBid {
	public $key: string;
	public laborType: string;
	public laborRate: string;
	public laborHours: number;

	constructor(key: string, laborType: string, laborRate: string, laborHours: number) {
		this.$key = key;
		this.laborType = laborType;
		this.laborRate = laborRate;
		this.laborHours = laborHours;
	}
}