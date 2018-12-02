const models = require('../../models');
const { Sellpoint } = models;

exports.destroy = (req, res) => {
	const { token, user } = req;
	const { id } = req.query;
	Sellpoint.find({ where: { id, owner: user.id } })
		.then(sellpoint => {
			sellpoint.destroy().then(result => {
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
