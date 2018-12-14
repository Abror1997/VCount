module.exports = (sequelize, DataTypes) => {
	const Sellpoint = sequelize.define(
		'sellpoint',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phoneNumber: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Sellpoint.associate = models => {
		Sellpoint.hasMany(models.Device, {
			foreignKey: 'sellpoint'
		});
		Sellpoint.belongsTo(models.User, {
			as: 'Owner',
			foreignKey: 'owner'
		});
	};

	return Sellpoint;
};
