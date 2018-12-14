const models = require('../../models');
const { Count } = models;

module.exports = (req, res) => {
	res.status(200).send({
		success: true,
		message: 'request received'
	});
};
