module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define(
		'company',
		{
			info: {
				type: DataTypes.JSONB,
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
	};

	return Company;
};
