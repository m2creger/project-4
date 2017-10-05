export class EquipmentBid {
	public $key: string;
	public equipmentType: string;
	public equipmentRate: number;

	constructor(key: string, equipmentType: string, equipmentRate: number) {
		this.$key = key;
		this.equipmentType = equipmentType;
		this.equipmentRate = equipmentRate;
	}
}