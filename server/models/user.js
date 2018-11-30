module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    info: {
      type: DataTypes.JSONB,
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
        type: DataTypes.STRING,
        allowNull: false
      },
    }
  },
  {
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Company, {
      foreignKey: 'owner'
    })
  }

  return User;
};