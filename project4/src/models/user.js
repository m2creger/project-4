module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("user", {
		company: Sequelize.STRING,
    	address: Sequelize.STRING,
    	city: Sequelize.STRING,
    	state: Sequelize.STRING,
    	phone: Sequelize.STRING,
    	email: Sequelize.STRING
	});
	return model;
};