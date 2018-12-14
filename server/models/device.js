module.exports = (sequelize, DataTypes) => {
	const Device = sequelize.define(
		'device',
		{
			deviceId: {
				type: DataTypes.INTEGER,
				unique: true,
				allowNull: true
			},
			status: {
				type: DataTypes.ENUM,
				values: ['inactive', 'active', 'pending', 'banned'],
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Device.associate = models => {
		Device.hasMany(models.Count, {
			foreignKey: 'device'
		});
		Device.belongsTo(models.User, {
			as: 'Owner',
			foreignKey: 'owner'
		});
	};

	return Device;
};
