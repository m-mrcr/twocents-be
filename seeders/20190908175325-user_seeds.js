'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        key: '44a4e0cd5616b584e6727171016f37bc943d456cb4d4f4f94ca3ff8def77da64',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        key: '8d1a527f301486a0291b72cafceef933e3fc0a46d6b7f85f167e3da78c9bd8e3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
