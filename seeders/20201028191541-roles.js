'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Roles',[
     {
       name: 'Admin'
     },
     {
       name: 'Device'
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await  queryInterface.bulkDelete('Roles',{},{})
  }
};
