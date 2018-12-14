module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user',
		{
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phoneNumber: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: true
		}
	);

	User.associate = models => {
		User.hasOne(models.Company, {
			foreignKey: 'owner',
			sourceKey: 'company'
		});
	};

	return User;
};
