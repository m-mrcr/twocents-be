'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserLocations', [
      {
        id: 1000000,
        userId: 1000000,
        locationId: 1000000,
        notes: "This place is great! Martin told me about it! Tiny cappuccinos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2000000,
        userId: 1000000,
        locationId: 3000000,
        notes: "This place rocks! Kyle's buddies and I went here one late morning and the pancakes were magical. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3000000,
        userId: 1000000,
        locationId: 2000000,
        notes: "TACOS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4000000,
        userId: 1000000,
        locationId: 4000000,
        notes: "Kyle's buddies love the staff here. Great people.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5000000,
        userId: 2000000,
        locationId: 5000000,
        notes: "Generally excellent coffee, and knowledgable staff.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6000000,
        userId: 2000000,
        locationId: 1000000,
        notes: "Tiny place",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7000000,
        userId: 2000000,
        locationId: 2000000,
        notes: "TACOS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8000000,
        userId: 2000000,
        locationId: 3000000,
        notes: "There's nothing wrong with a good 2am stop for some flapjacks. I hear this place is great.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9000000,
        userId: 2000000,
        locationId: 4000000,
        notes: "The bombshell sandwich is apparently the best.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10000000,
        userId: 1000000,
        locationId: 5000000,
        notes: "Great area for people watching. ;)",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserLocations', null, {});
  }
};
