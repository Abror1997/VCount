const models = require('../../models');
const { User } = models;

const { hashSync } = require('../../helpers/auth');

module.exports = (req, res) => {
	User.findOne({ where: { email: req.body.email } })
		.then(user => {
			if (user)
				res.status(404).send({
					message: 'User not found'
				});
			else {
				const password = hashSync(req.body.password);
				User.create({ ...req.body, password }).then(user => {
					const { username } = user;
					res.status(200).send({
						username
					});
				});
			}
		})
		.catch(error => {
			res.status(500).send({
				error
			});
		});
};
