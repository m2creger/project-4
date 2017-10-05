export class Worker {
	public $key: string;
	public userId: string;
	public name: string;
	public laborRate: number;
	public jobTitle: string;

	constructor(key: string, userId: string, name: string, laborRate: number, jobTitle: string ) {
		this.$key = key;
		this.userId = userId;
		this.name = name;
		this.laborRate = laborRate;
		this.jobTitle = jobTitle;
	}
}