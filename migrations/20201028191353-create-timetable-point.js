'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TimetablePoints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deviceId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Devices',
          key:'id'
        }
      },
      commandId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Commands',
          key: 'id'
        }
      },
      from: {
        type: Sequelize.TIME
      },
      to: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TimetablePoints');
  }
};