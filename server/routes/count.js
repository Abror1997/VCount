const auth = require('../middleware/auth');
const Count = require('../controllers/count');

module.exports = app => {
	app.get('/api/count/get', auth, Count.get);
};
