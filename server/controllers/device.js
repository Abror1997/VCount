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
				Device.find({
					where: {
						info: { id: info.id }
					}
				}).then(result => {
					if (result) {
						res.status(401).send({
							success: false,
							message: 'device already exists'
						});
					} else {
						sellpoint.createDevice({ info }).then(device => {
							device.setOwner(user).then(() => {
								res.status(200).send({
									success: true,
									message: 'device registered',
									device
								});
							});
						});
					}
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

exports.delete = (req, res) => {
	console.log('device delete');
	const { token, user } = req;
	const { id } = req.query;
	Device.find({ where: { info: { id }, owner: user.id } })
		.then(device => {
			console.log('device', device);
			device.destroy().then(result => {
				res.status(200).send({
					success: true,
					result
				});
			});
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				error
			});
		});
};

exports.get = (req, res) => {
	console.log('device get');
	const { token, user } = req;
	const { id, skip, limit, order } = req.query;

	if (id) {
		console.log('device get id', id);
		Device.findOne({ where: { id, owner: user.id } })
			.then(device => {
				res.status(200).send({
					success: true,
					device
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		Device.findAll({ where: { owner: user.id } })
			.then(device => {
				res.status(200).send({
					success: true,
					device
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	}
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
