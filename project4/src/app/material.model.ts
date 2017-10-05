export class MaterialBid {
	public $key: string;
	public materialType: string;
	public materialCost: number;
	public materialQuantity: number;

	constructor(key: string, materialType: string, materialCost: number, materialQuantity: number) {
		this.$key = key;
		this.materialType = materialType;
		this.materialCost = materialCost;
		this.materialQuantity = materialQuantity;
	}
}