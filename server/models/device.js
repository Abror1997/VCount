module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('device', {
      data: {
        type: DataTypes.JSONB,
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          required: true
        },
        status: {
          type: DataTypes.ENUM,
          values: ['inactive', 'active', 'pending']
        }
      }
  },
  {
    timestamps: true,
  });

  Device.association = (models) => {
    Device.belongsTo(models.Company, {
      data: {
        foreignKey: 'owner'
      }
    })
  }

  return Device;
};