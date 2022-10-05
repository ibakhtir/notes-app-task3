"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert("Notes", [
      {
        title: "Book",
        body: "Read the book",
        category: "Task",
        dates: ["1/9/2022"],
        isArchived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Note",
        body: "Write the note",
        category: "Task",
        dates: ["1/7/2022"],
        isArchived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Notes", null, {});
  },
};
