'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    url: DataTypes.TEXT,
    phone: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    review_count: DataTypes.INTEGER,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.ARRAY(DataTypes.STRING),
    price: DataTypes.STRING,
    hours: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};
