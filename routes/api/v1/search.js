var express = require('express');
var router = express.Router();
var Location = require('../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]

router.get('/recommendations_search', async function(req, res) {
  var query = req.query.q
  try {
    let locations = await Location.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`
        }
      }
    });
    res.setHeader(...defaultHeader);
    res.status(200).send(JSON.stringify(locations, ['id', 'name']));
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(500).send({ error })
  }
});

module.exports = router;
