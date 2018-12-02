const controllers = require('../controllers');
const auth = require('../middleware/auth');
const { Device } = controllers;

module.exports = app => {
	app.post('/api/device/register', auth, Device.register);
	app.delete('/api/device/delete', auth, Device.delete);
	app.get('/api/device/get', auth, Device.get);
	app.get('/api/device/get', auth, Device.get);
};
