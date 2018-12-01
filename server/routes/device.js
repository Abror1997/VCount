const Device = require('../controllers/device');
const auth = require('../middleware/auth');

module.exports = app => {
	app.post('/api/device/register', auth, Device.register);
	app.delete('/api/device/delete', auth, Device.delete);
	app.get('/api/device/get', auth, Device.get);
};
