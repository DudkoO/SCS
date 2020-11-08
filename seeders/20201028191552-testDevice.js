'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const today = new Date();
    await queryInterface.bulkInsert('Devices', [
      {
        name: 'Светофор',
        responsePeriod: today,
        lastResponse: today,
        comment:'test device',
        userId:1,
        createdAt: today,
        updatedAt: today
      },
      {
        name: 'Шлагбаум',
        responsePeriod: today,
        lastResponse: today,
        comment:'test device',
        createdAt: today,
        updatedAt: today
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Devices', null, {});

  }
};
