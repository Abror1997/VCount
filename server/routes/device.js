const auth = require('../middleware/auth');
const Device = require('../controllers/device');

module.exports = app => {
	app.post('/api/device/register', auth, Device.register);
	app.delete('/api/device/delete', auth, Device.destroy);
	app.get('/api/device/get', auth, Device.get);
};
