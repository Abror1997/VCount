const Sequelize = require('sequelize');

let sequelize = null;
if (process.env.DATABASE_URL) {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres'
	});
} else {
	sequelize = new Sequelize('vcount', 'postgres', '123456789', {
		host: '127.0.0.1',
		port: 5432,
		dialect: 'postgres'
	});
}

const models = {
	User: sequelize.import('./user'),
	Company: sequelize.import('./company'),
	Device: sequelize.import('./device'),
	Sellpoint: sequelize.import('./sellpoint.js'),
	Count: sequelize.import('./count')
};

Object.keys(models).forEach(modelName => {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
