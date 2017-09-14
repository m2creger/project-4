import { db } from '../models';
var User = db.models.User;
var Bid = db.models.Bid;
var Project = db.models.Project;

function create(req, res) {
	res.json("******Create user");
	User.create(req.body).then(function(user) {
		console.log(user);
	})
}

function show(req, res) {
	
}

const usersController = <any>{};
usersController.create = create;
usersController.show = show;

export { usersController }