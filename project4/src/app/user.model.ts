export class User {
	$key: string;
	userName: string;
	website: string;
	address: string;
	phone: string;

	constructor($key: string, userName: string, website: string, address: string, phone: string) {
		this.$key = $key;
		this.userName = userName;
		this.website = website;
		this.address = address;
		this.phone = phone;
	}
}