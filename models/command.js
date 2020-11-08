'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Command extends Model {

    static associate(models) {
      // define association here
      Command.belongsTo(models.Device)

    }
  };
  Command.init({
    deviceId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    code: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    comment:{
      type:DataTypes.STRING(200),
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Command',
  });
  return Command;
};