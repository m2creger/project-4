module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("project", {
		projectName: Sequelize.STRING,
		projectLocation: Sequelize.STRING,
		projectAmount: Sequelize.DOUBLE
	});
	return model;
}