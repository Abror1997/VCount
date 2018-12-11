const auth = require('../middleware/auth');
const Sellpoint = require('../controllers/sellpoint');

module.exports = app => {
	app.post('/api/sellpoint/register', auth, Sellpoint.register);
	app.delete('/api/sellpoint/destroy', auth, Sellpoint.destroy);
	app.get('/api/sellpoint/get', auth, Sellpoint.get);
};
