const models = require('../../models');
const { User } = models;

const { compareSync, sign } = require('../../helpers/auth');

module.exports = (req, res) => {
	User.findOne({ where: { username: req.body.username } })
		.then(user => {
			if (!user) {
				res
					.status(200)
					.send({
						success: false,
						message: 'User not found'
					})
					.end();
			}
			const passwordIsValid = compareSync(req.body.password, user.password);
			if (!passwordIsValid) {
				res
					.status(200)
					.send({
						success: false,
						message: 'Password is incorrect'
					})
					.end();
			}
			const token = sign(user.id);
			res.status(200).send({
				success: true,
				token
			});
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				message: 'user login',
				error
			});
		});
};
