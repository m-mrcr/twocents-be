'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLocation = sequelize.define('UserLocation', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {});
  UserLocation.associate = function(models) {
    UserLocation.belongsTo(models.User, { foreignKey: 'userId' });
    UserLocation.belongsTo(models.Location, {foreignKey: 'locationId' });
  };
  return UserLocation;
};
