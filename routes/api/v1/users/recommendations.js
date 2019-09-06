var express = require('express');
var router = express.Router();
var Location = require('../../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]

router.get('/', async function(req, res) {
  try {
    let locations = await Location.findAll();
    res.setHeader(...defaultHeader);
    res.status(200).send(JSON.stringify(locations));
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(500).send({ error })
  }
});

module.exports = router;
