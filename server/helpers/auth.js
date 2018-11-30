const SALT = 8;
const SECRET = 'VCountUZ:SECRET';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashSync = password => {
	return bcrypt.hashSync(password, SALT);
};

const compareSync = (password, userPassword) => {
	return bcrypt.compareSync(password, userPassword);
};

const sign = id => {
	return jwt.sign(id, SECRET);
};

const verify = (token, cb) => {
	return jwt.verify(token, SECRET, (err, decode) => {
		if (err) return cb(err);
		return cb(null, decode);
	});
};

module.exports = {
	hashSync,
	compareSync,
	sign,
	verify
};
