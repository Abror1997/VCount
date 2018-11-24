module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: {
      type: DataTypes.STRING,
      // unique: true,
      // required: true
    },
    phoneNumber: DataTypes.STRING,
  },
  {
    timestamps: true,
  });

  return Company;
};