const { verify } = require('../helpers/auth');
const models = require('../models');
const { User } = models;

module.exports = (req, res, next) => {
	const token = req.headers.auth;

	if (token) {
		verify(token, (err, decode) => {
			User.findById(decode)
				.then(user => {
					if (!user) {
						return res.status(404).send({
							message: 'Auth failed. User not found'
						});
					}
					req.token = token;
					req.user = user;
					next();
				})
				.catch(error => {
					res.status(500).send({
						message: 'Token verification failed'
					});
				});
		});
	} else {
		return res.status(404).send({
			message: 'Token not found'
		});
	}
};
