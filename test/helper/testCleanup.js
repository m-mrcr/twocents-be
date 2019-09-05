var Location = require('../../models').Location;

module.exports = async function cleanup() {
  await Location.destroy({ where: {} })
}
