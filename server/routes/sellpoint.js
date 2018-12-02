const controllers = require('../controllers');
const auth = require('../middleware/auth');
const { Sellpoint } = controllers;

module.exports = app => {
	app.post('/api/sellpoint/register', auth, Sellpoint.register);
	app.delete('/api/sellpoint/delete', auth, Sellpoint.delete);
	app.get('/api/sellpoint/get', auth, Sellpoint.get);
	app.get('/api/sellpoint/get', auth, Sellpoint.get);
};
