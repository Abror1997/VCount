const models = require('../../models');
const { Device, Count } = models;

module.exports = count => {
	Device.findOne({ where: { info: { id: count.deviceId } } })
		.then(device => {
			if (device) {
				device.createCount(count);
			} else {
				Count.create(count);
			}
		})
		.catch(error => {
			console.log('device receiveCount error', error);
		});
};
