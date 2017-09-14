import { db } from '../models';
let DB = db.models;

var userBids = [
	{
		bidName: 'Some project',
		bidLocation: 'Denver, CO',
		bidAmount: 5000
	},
	{
		bidName: 'Big Project',
		bidLocation: 'Arvada, CO',
		bidAmount: 10000
	}
];

var userProjects = [
	{
		projectName: 'Awesome Project',
		projectLocation: 'Lakewood, CO',
		projectAmount: 15000
	},
	{
		projectName: 'Sweet Project',
		projectLocation: 'Golden, CO',
		projectAmount: 100000
	}
];

var userCreate = function() {
	return DB.User.create({
		company: 'Bobs construction',
		address: '9000 E Hickville Rd',
		city: 'Paoniia',
		state: 'Colorado',
		phone: '303-012-1111',
		email: 'bob@bobsconst.com'
	}).then(function(bids) {
		DB.Bid.bulkCreate(userBids)

		DB.Project.bulkCreate(userProjects)
	})
}

userCreate()
.then(function() {
	process.exit();
});

