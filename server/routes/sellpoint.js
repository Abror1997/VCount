const Sellpoint = require('../controllers/sellpoint');
const auth = require('../middleware/auth');

module.exports = app => {
	app.post('/api/sellpoint/register', auth, Sellpoint.register);
	app.delete('/api/sellpoint/delete', auth, Sellpoint.delete);
};
