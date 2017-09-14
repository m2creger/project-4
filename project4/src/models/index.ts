import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://marshallcreger@localhost:5432/forge');

var User = sequelize.import("./user");
var Bid = sequelize.import("./bid");
var Project = sequelize.import("./project");

Bid.belongsTo(User);
User.hasMany(Bid);

Project.belongsTo(User);
User.hasMany(Project);

const db = <any>{};
db.models = {
	User,
	Bid,
	Project
};

// Export models
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};