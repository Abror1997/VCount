const models = require('../../models');
const { Count } = models;

module.exports = (req, res) => {
	console.log('request received');
	res.status(200).send({
		success: true,
		message: 'request received'
	});
};
