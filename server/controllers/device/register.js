const models = require('../../models');
const { Sellpoint, Device } = models;

module.exports = (req, res) => {
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
