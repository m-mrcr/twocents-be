'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLocation = sequelize.define('UserLocation', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {});
  UserLocation.associate = function(models) {
    UserLocation.belongsTo(models.User);
    UserLocation.belongsTo(models.Location);
  };
  return UserLocation;
};
