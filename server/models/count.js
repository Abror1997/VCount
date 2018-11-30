module.exports = (sequelize, DataTypes) => {
	const Data = sequelize.define(
		'count',
		{
			info: {
				type: DataTypes.JSONB,
				id: DataTypes.INTEGER
			},
			data: {
				type: DataTypes.JSONB,
				in: DataTypes.INTEGER,
				out: DataTypes.INTEGER,
				total: DataTypes.INTEGER
			}
		},
		{
			timestamps: true
		}
	);

	return Data;
};
