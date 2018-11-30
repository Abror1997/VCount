const models = require('../models');
const { Sellpoint, Device, Count } = models;

exports.register = (req, res) => {
	const { token, user } = req;
	const { sellpoint, info } = req.body;
	Sellpoint.findOne({
		where: {
			id: sellpoint,
			owner: user.id
		}
	})
		.then(sellpoint => {
			if (sellpoint) {
				sellpoint.createDevice({ info }).then(device => {
					device.setOwner(user).then(() => {
						res.status(200).send({
							success: true,
							message: 'device registered',
							device
						});
					});
				});
			} else {
				res.status(401).send({
					success: false,
					message: 'sellpoint not found'
				});
			}
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				message: 'device register error',
				error
			});
		});
};

exports.receiveData = count => {
	const { info, data } = count;
	Device.findOne({ where: { info } })
		.then(device => {
			if (device) {
				device.createCount({ info, data });
				console.log('device found');
			} else {
				Count.create(count);
				console.log('device not found');
			}
		})
		.catch(error => {
			console.log('error', error);
		});
};
