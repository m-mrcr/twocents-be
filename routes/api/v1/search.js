var Sequelize = require('sequelize')
var Op = Sequelize.Op
var Location = require('../../../models').Location;
var Serializer = require('../serializers/yelpToLocationSerializer.js');
var express = require('express');
const fetch = require('node-fetch')
var defaultHeader = ["Content-Type", "application/json"]
var router = express.Router();
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
    let term = req.query.term;
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let location = req.query.location;
    let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
    res.setHeader(...defaultHeader);

    if(term) {
      if(latitude && longitude) {
        let results = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=10`, { method: 'GET', headers: headers})
          .then(function(response) {
            return response.json();
          })
          .catch(function(error){
            return error
          })
        res.status(200).send(JSON.stringify(results));
      } else if(location) {
          let results = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=10`, {method: 'GET', headers: headers})
            .then(function(response) {
              return response.json();
            })
            .catch(function(error){
              return error
            })
          res.status(200).send(JSON.stringify(results));
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



module.exports = router;
