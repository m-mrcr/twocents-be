var shell = require('shelljs');
var Location = require('../../models').Location;
var User = require('../../models').User;
var UserLocation = require('../../models').UserLocation;

module.exports = async function cleanup() {
  await UserLocation.destroy({ where: {} })
  await Location.destroy({ where: {} })
  await User.destroy({ where: {} })
  shell.exec('npx sequelize db:seed:all');
}
