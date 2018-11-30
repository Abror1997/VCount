const models = require('../models');
const { Company, Sellpoint } = models;

exports.register = (req, res) => {
	const { token, user } = req;
	const { company, info } = req.body;
	Company.findOne({
		where: {
			id: company,
			owner: user.id
		}
	})
		.then(company => {
			if (company) {
				Sellpoint.find({
					where: {
						info,
						company: company.id,
						owner: user.id
					}
				}).then(result => {
					if (result) {
						res.status(401).send({
							success: false,
							message: 'sellpoint already exists'
						});
					} else {
						company.createSellpoint({ info }).then(sellpoint => {
							sellpoint.setOwner(user).then(() => {
								res.status(200).send({
									success: true,
									message: 'sellpoint created',
									sellpoint
								});
							});
						});
					}
				});
			} else {
				res.status(200).send({
					success: false,
					message: 'company not found'
				});
			}
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				message: 'sellpoint register',
				error
			});
		});
};

exports.delete = (req, res) => {
	const { token, user } = req;
	const { id, info } = req.body;
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
