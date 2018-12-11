const models = require('../../models');
const { Company } = models;

module.exports = (req, res) => {
	const { token, user } = req;
	const { id } = req.query;
	Company.find({ where: { id, owner: user.id } })
		.then(company => {
			company.destroy().then(() => {
				res.status(200).send({
					success: true
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
