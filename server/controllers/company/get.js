const models = require('../../models');
const { Company } = models;

module.exports = (req, res) => {
	const { token, user } = req;
	const { id, skip, limit, order } = req.query;
	if (id) {
		Company.findOne({ where: { id, owner: user.id } })
			.then(result => {
				res.status(200).send({
					success: true,
					result
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		Company.findAll({
			where: { owner: user.id },
			offset: skip,
			limit,
			order: [['id', order]]
		})
			.then(result => {
				res.status(200).send({
					success: true,
					result
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
