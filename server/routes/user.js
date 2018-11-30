const User = require('../controllers/user');
const auth = require('../middleware/auth');

module.exports = app => {
	app.post('/api/user/register', User.register);
	app.post('/api/user/login', User.login);
	app.get('/api/user/auth', auth, User.auth);
};
