'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamName: {
        type: Sequelize.STRING
      },
      teamAbbr: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      teamCoach: {
        type: Sequelize.STRING
      },
      teamRank: {
        type: Sequelize.INTEGER
      },
      teamPoints: {
        type: Sequelize.INTEGER
      },
      teamPicture: {
        type: Sequelize.BLOB
      },
      teamLogo: {
        type: Sequelize.BLOB
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teams');
  }
};