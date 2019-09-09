'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    url: DataTypes.TEXT,
    phone: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    reviewCount: DataTypes.INTEGER,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    coordinates: DataTypes.ARRAY(DataTypes.FLOAT),
    location: DataTypes.ARRAY(DataTypes.STRING),
    price: DataTypes.STRING,
    hours: DataTypes.ARRAY(DataTypes.STRING),
    yelpId: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    Location.belongsToMany(models.User, {
      through: 'UserLocations',
      as: 'users',
      foreignKey: 'locationId'
    });
  };
  return Location;
};
