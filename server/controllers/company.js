const models = require('../models');
const { Company } = models;

exports.register = (req, res) => {
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

exports.delete = (req, res) => {
	const { token, user } = req;
	const { id } = req.query;
	Company.find({ where: { id, owner: user.id } })
		.then(company => {
			company.destroy().then(result => {
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
	const { token, user } = req;
	const { id, skip, limit, order } = req.query;
	if (id) {
		Company.findOne({ where: { id, owner: user.id } })
			.then(company => {
				res.status(200).send({
					success: true,
					company
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		Company.findAll({ where: { owner: user.id } })
			.then(company => {
				res.status(200).send({
					success: true,
					company
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
