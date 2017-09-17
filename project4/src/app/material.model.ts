export class MaterialBid {
	public $key: string;
	public materialType: string;
	public materialCost: number;

	constructor(key: string, materialType: string, materialCost: number) {
		this.$key = key;
		this.materialType = materialType;
		this.materialCost = materialCost;
	}
}