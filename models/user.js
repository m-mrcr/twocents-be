'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    key: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Location, {
      through: 'UserLocations',
      as: 'locations',
      foreignKey: 'userId'
    });
  };
  return User;
};
