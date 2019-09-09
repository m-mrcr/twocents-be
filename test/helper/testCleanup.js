var Location = require('../../models').Location;
var User = require('../../models').User;
var UserLocation = require('../../models').UserLocation;

module.exports = async function cleanup() {
  await Location.destroy({ where: {} })
  await User.destroy({ where: {} })
  await UserLocation.destroy({ where: {} })
}
