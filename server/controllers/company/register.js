const models = require('../../models');
const { Company } = models;

module.exports = (req, res) => {
	const { token, user } = req;
	const { info } = req.body;

	Company.find({ where: { info } })
		.then(result => {
			if (result) {
				res.status(401).send({
					success: false,
					message: 'company already exists'
				});
			} else {
				user.createCompany({ info }).then(company => {
					res.status(200).send({
						success: true,
						message: 'company created',
						company
					});
				});
			}
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				error
			});
		});
};
