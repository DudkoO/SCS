'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const today = new Date();

    await queryInterface.bulkInsert('Users',[
      {
        username: 'TestUser',
        password: 'passord',
        roleId: 2,
        createdAt: today,
        updatedAt: today
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
