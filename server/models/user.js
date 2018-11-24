module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
  },
  {
    timestamps: true,
  });

  User.association = (models) => {
    User.belongsTo(models.Company, {
      foreignKey: 'company'
    })
  }

  return User;
};