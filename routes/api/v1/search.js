var Sequelize = require('sequelize')
var Op = Sequelize.Op
var Location = require('../../../models').Location;
var Serializer = require('../../../serializers/yelpToLocationSerializer.js');
var serializer = new Serializer();
var express = require('express');
var fetch = require('node-fetch')
var defaultHeader = ["Content-Type", "application/json"]
var router = express.Router();
require('dotenv').config();

router.get('/recommendations_search', async function(req, res) {
  var query = req.query.q
  res.setHeader(...defaultHeader);
  try {
    let locations = await Location.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`
        }
      }
    });
    res.status(200).send(JSON.stringify(locations, ['id', 'name']));
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.get('/yelp_search', async function(req, res) {
  try {
    let term = req.query.term;
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let location = req.query.location;
    let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
    res.setHeader(...defaultHeader);

    if(term) {
      if(latitude && longitude) {
        let results = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=10`, { method: 'GET', headers: headers})
          .then(response => response.json())
          .catch(error => error)
        res.status(200).send(JSON.stringify(serializer.truncatedLocationSerializer(results)));
      } else if(location) {
          let results = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=10`, {method: 'GET', headers: headers})
            .then(response => response.json())
            .catch(error => error)
          res.status(200).send(JSON.stringify(serializer.truncatedLocationSerializer(results)));
        } else {
          HandleError();
        }
      } else {
        HandleError();
      }
    } catch (error) {
      res.status(500).send({ error })
    }
  }
);

router.get('/yelp_business', async function(req, res) {
  try {
    let yelpId = req.query.yelpId;
    let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
    if(yelpId) {
      let results = await fetch(`https://api.yelp.com/v3/businesses/${yelpId}`, { method: 'GET', headers: headers })
        .then(response => response.json())
        .catch(error => error)
      res.setHeader(...defaultHeader);
      res.status(200).send(JSON.stringify(serializer.locationSerializer(results)));
    }
  } catch (error) {
      res.status(500).send({ error })
  }
});



module.exports = router;
