const models = require('../../models');
const { Sellpoint } = models;

exports.get = (req, res) => {
	const { token, user } = req;
	const { id, skip, limit, order } = req.query;
	if (id) {
		Sellpoint.findOne({ where: { id, owner: user.id } })
			.then(sellpoint => {
				res.status(200).send({
					success: true,
					sellpoint
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		Sellpoint.findAll({
			where: { owner: user.id },
			offset: skip,
			limit,
			order: [['id', order]]
		})
			.then(sellpoint => {
				res.status(200).send({
					success: true,
					sellpoint
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
