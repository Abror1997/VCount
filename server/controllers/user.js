const models = require('../models');
const { User } = models;

const { compareSync, hashSync, sign, verify } = require('../helpers/auth');

exports.register = (req, res) => {
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

exports.login = (req, res) => {
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

exports.auth = (req, res) => {
	const { user } = req;
	res.status(200).send({
		success: true,
		id: user.id,
		username: user.username
	});
};

exports.get = (req, res) => {
	const { id, skip, limit, order } = req.query;
	if (id) {
		User.findOne({ where: { id } })
			.then(user => {
				res.status(200).send({
					success: true,
					user
				});
			})
			.catch(error => {
				res.status(401).send({
					success: false,
					error
				});
			});
	} else {
		User.findAll({
			offset: skip,
			limit,
			order: [['id', order]]
		})
			.then(user => {
				res.status(200).send({
					success: true,
					user
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
