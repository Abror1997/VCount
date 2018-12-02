const controllers = require('../controllers');
const auth = require('../middleware/auth');
const { Company } = controllers;

module.exports = app => {
	app.post('/api/company/register', auth, Company.register);
	app.delete('/api/company/delete', auth, Company.delete);
	app.get('/api/company/get', auth, Company.get);
	app.get('/api/company/get', auth, Company.get);
};
