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
						return res.status(401).send({
							error: true,
							message: 'auth: user not found'
						});
					}
					req.token = token;
					req.user = user;
					next();
				})
				.catch(error => {
					throw error;
				});
		});
	} else {
		return res.status(401).send({
			success: false,
			message: 'token not found'
		});
	}
};
