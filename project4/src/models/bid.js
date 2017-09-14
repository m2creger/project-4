module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("manager", {
		bidName: Sequelize.STRING,
		bidLocation: Sequelize.STRING,
		bidAmount: Sequelize.DOUBLE
	});
	return model;
}