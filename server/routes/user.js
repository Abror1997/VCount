const auth = require('../middleware/auth');
const controllers = require('../controllers');
const { User } = controllers;

module.exports = app => {
	app.post('/api/user/register', User.register);
	app.post('/api/user/login', User.login);
	app.get('/api/user/auth', auth, User.auth);
	app.get('/api/user/get', User.get);
};
