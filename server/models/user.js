module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true
      },
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