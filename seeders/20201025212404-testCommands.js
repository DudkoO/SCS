'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const today = new Date();
    await queryInterface.bulkInsert('Commands', [
      {
        code: 11,
        deviceId:1,
        comment: 'включить',
        createdAt: today,
        updatedAt: today
      },
      {
        code: 11,
        deviceId:1,
        comment: 'отключить',
        createdAt: today,
        updatedAt: today
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Commands', null, {});

  }
};
