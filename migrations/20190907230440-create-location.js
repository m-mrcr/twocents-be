'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      reviewCount: {
        type: Sequelize.INTEGER
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      coordinates: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
      },
      location: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      price: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      yelpId: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Locations');
  }
};