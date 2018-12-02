const models = require('../../models');
const { Device } = models;

exports.destroy = (req, res) => {
	const { token, user } = req;
	const { id } = req.query;
	Device.find({ where: { info: { id }, owner: user.id } })
		.then(device => {
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
