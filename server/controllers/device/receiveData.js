const models = require('../../models');
const { Device, Count } = models;

module.exports = count => {
	const { info, data } = count;
	Device.findOne({ where: { info } })
		.then(device => {
			if (device) {
				device.createCount({ info, data });
			} else {
				Count.create(count);
			}
		})
		.catch(error => {
			console.log('device receiveCount error', error);
		});
};
