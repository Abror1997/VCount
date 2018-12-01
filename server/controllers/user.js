const models = require('../models');
const { User } = models;

const { compareSync, hashSync, sign, verify } = require('../helpers/auth');

exports.register = (req, res) => {
	User.findOne({ where: req.body })
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

exports.login = (req, res) => {
	const { info } = req.body;
	console.log('user login', info);
	User.findOne({
		where: {
			info: {
				username: info.username
			}
		}
	})
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
			const passwordIsValid = compareSync(info.password, user.info.password);
			if (!passwordIsValid) {
				res
					.status(200)
					.send({
						isAuth: false,
						message: 'Password is incorrect'
					})
					.end();
			}
			const token = sign(user.id);
			res.status(200).send({
				isAuth: true,
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

exports.auth = (req, res) => {
	const { user } = req;
	res.status(200).send({
		isAuth: true,
		id: user.id,
		username: user.username
	});
};
