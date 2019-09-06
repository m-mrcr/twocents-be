var express = require('express');
var router = express.Router();
var Location = require('../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]
require('dotenv').config();

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

router.get('/yelp_search', async function(req, res) {
  try {
    let term = await req.query.term;
    let latitude = await req.query.latitude;
    let longitude = await req.query.longitude;
    let location = await req.query.location;
    if(typeof(term) === 'undefined') {
      HandleError();
    } else {
      if(typeof(latitude) !== 'undefined' && typeof(longitude) !== 'undefined') {
        let results = fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}`, {compress: true, headers: {"Accept-Encoding": "json", "Authorization":`Bearer ${process.env.YELP_API_KEY}`}})
      } else if(typeof(location) !== 'undefined') {
        let results = fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {compress: true, headers: {"Accept-Encoding": "gzip", "Authorization":`Bearer ${process.env.YELP_API_KEY}`}})
      }
    }
    res.setHeader(...defaultHeader);
    res.status(200).send(JSON.stringify(results));
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(500).send({ error })
  }
});

module.exports = router;
