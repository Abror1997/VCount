module.exports = (req, res) => {
	res.status(200).send({
		message: 'auth succeeded'
	});
};
