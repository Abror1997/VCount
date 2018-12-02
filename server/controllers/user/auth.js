module.exports = (req, res) => {
	const { user } = req;
	res.status(200).send({
		success: true,
		id: user.id,
		username: user.username
	});
};
