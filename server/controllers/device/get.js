const models = require('../../models');
const { Device } = models;

module.exports = (req, res) => {
	const { token, user } = req;
	const { id, skip, limit, order } = req.query;
	if (id) {
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
		Device.findAll({
			where: { owner: user.id },
			offset: skip,
			limit,
			order: [['id', order]]
		})
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
