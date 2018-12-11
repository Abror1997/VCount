const user = require('./user');
const company = require('./company');
const sellpoint = require('./sellpoint');
const device = require('./device');
const count = require('./count');

module.exports = app => {
	user(app);
	company(app);
	sellpoint(app);
	device(app);
	count(app);
};
