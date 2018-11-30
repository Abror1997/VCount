const Company = require('../controllers/company');
const auth = require('../middleware/auth');

module.exports = app => {
	app.post('/api/company/register', auth, Company.register);
	app.delete('/api/company/delete', auth, Company.delete);
	app.get('/api/company/get', auth, Company.get);
};
