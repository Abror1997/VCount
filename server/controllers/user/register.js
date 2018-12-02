const models = require('../../models');
const { User } = models;

const { hashSync } = require('../../helpers/auth');

module.exports = (req, res) => {
	User.findOne({ where: { email: req.body.email } })
		.then(user => {
			if (user) {
				res.status(200).send({
					success: false,
					message: 'Email already exists'
				});
			} else {
				const password = hashSync(req.body.password);
				User.create({ ...req.body, password }).then(user => {
					const { id, username } = user;
					res.status(200).send({
						success: true,
						id,
						username
					});
				});
			}
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				message: 'user register',
				error
			});
		});
};
