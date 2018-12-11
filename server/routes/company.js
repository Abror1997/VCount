const auth = require('../middleware/auth');
const Company = require('../controllers/company');

module.exports = app => {
	app.post('/api/company/register', auth, Company.register);
	app.delete('/api/company/destroy', auth, Company.destroy);
	app.get('/api/company/get', auth, Company.get);
};
