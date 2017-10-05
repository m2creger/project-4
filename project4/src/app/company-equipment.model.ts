export class CompanyEquipment {
	public $key: string;
	public userId: string;
	public equipmentType: string;
	public equipmentMake: string;
	public equipmentModel: string;

	constructor(key: string, userId: string, equipmentType: string, equipmentMake: string, equipmentModel: string) {
		this.$key = key;
		this.userId = userId;
		this.equipmentType = equipmentType;
		this.equipmentMake = equipmentMake;
		this.equipmentModel = equipmentModel;
	}
}