const models = require('../../models');
const { User } = models;

const { compareSync, sign } = require('../../helpers/auth');

module.exports = (req, res) => {
	User.findOne({ where: { username: req.body.username } })
		.then(user => {
			if (!user) {
				res.status(404).send({
					message: 'User not found'
				});
			} else {
				const passwordIsValid = compareSync(req.body.password, user.password);
				if (!passwordIsValid) {
					res.status(404).send({
						message: 'Password is incorrect'
					});
				} else {
					const token = sign(user.id);
					res.status(200).send({
						token
					});
				}
			}
		})
		.catch(error => {
			res.status(500).send({
				error
			});
		});
};
