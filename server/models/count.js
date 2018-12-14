module.exports = (sequelize, DataTypes) => {
	const Data = sequelize.define(
		'count',
		{
			deviceId: DataTypes.INTEGER,
			in: DataTypes.INTEGER,
			out: DataTypes.INTEGER,
			total: DataTypes.INTEGER
		},
		{
			timestamps: true
		}
	);

	return Data;
};
