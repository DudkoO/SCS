'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.hasMany(models.Command)
      Device.hasMany(models.TimetablePoint)
    }
  };
  Device.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    responsePeriod:{
      type:DataTypes.TIME,
      allowNull:false
    },
    lastResponse: DataTypes.DATE,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};