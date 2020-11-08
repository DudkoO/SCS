'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimetablePoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TimetablePoint.belongsTo(models.Device)
      TimetablePoint.belongsTo(models.Command)

    }
  };
  TimetablePoint.init({
    deviceId: DataTypes.INTEGER,
    commandId: DataTypes.INTEGER,
    from: DataTypes.TIME,
    to: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'TimetablePoint',
  });
  return TimetablePoint;
};