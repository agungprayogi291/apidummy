'use strict';
var uniqueName = require('unique-names-generator');
// const names = require('unique-names-generator/dist/unique-names-generator.constructor');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let users = [];
    for(let i = 0; i < 50 ; i++){
      let user = {
        firstName:uniqueName.names[i],
        lastName:uniqueName.names[i],
        email:uniqueName.names[i] + "@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      }
      users.push(user)
    }
    await queryInterface.bulkInsert('Users',
      users
     )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{});
  }
};
