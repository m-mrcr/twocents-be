'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserLocations', [
      {
        id: 1,
        userId: 1000000,
        locationId: 1,
        notes: "This place is great! Martin told me about it! Tiny cappuccinos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 1000000,
        locationId: 3,
        notes: "This place rocks! Kyle's buddies and I went here one late morning and the pancakes were magical. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userId: 1000000,
        locationId: 2,
        notes: "TACOS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        userId: 1000000,
        locationId: 4,
        notes: "Kyle's buddies love the staff here. Great people.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        userId: 2000000,
        locationId: 5,
        notes: "Generally excellent coffee, and knowledgable staff.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        userId: 2000000,
        locationId: 1,
        notes: "Tiny place",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        userId: 2000000,
        locationId: 2,
        notes: "TACOS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        userId: 2000000,
        locationId: 3,
        notes: "There's nothing wrong with a good 2am stop for some flapjacks. I hear this place is great.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        userId: 2000000,
        locationId: 4,
        notes: "The bombshell sandwich is apparently the best.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        userId: 1000000,
        locationId: 5,
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
