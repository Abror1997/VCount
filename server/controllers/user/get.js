const models = require('../../models');
const { User } = models;

module.exports = (req, res) => {
	const { id, skip, limit, order } = req.query;
	if (id) {
		User.findOne({ where: { id } })
			.then(user => {
				res.status(200).send({
					success: true,
					user
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		User.findAll({
			offset: skip,
			limit,
			order: [['id', order]]
		})
			.then(user => {
				res.status(200).send({
					success: true,
					user
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
