export class User {
	$key: string;
	userId: string;
	companyName: string;
	website: string;
	address: string;
	phone: string;


	constructor($key: string, userId: string, companyName: string, website: string, address: string, phone: string) {
		this.$key = $key;
		this.userId = userId;
		this.companyName = companyName;
		this.website = website;
		this.address = address;
		this.phone = phone;
	}
}