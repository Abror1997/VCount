module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define(
		'company',
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

	Company.associate = models => {
		Company.hasMany(models.Sellpoint, {
			foreignKey: 'company'
		});
		Company.belongsTo(models.User, {
			as: 'Owner',
			foreignKey: 'owner'
		});
	};

	return Company;
};
