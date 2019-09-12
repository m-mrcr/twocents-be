var express = require('express');
var router = express.Router();
var Location = require('../../../../models').Location;
var User = require('../../../../models').User;
var UserLocation = require('../../../../models').UserLocation;
var Sequelize = require('sequelize')
var Serializer = require('../../../../serializers/yelpToLocationSerializer.js');
var serializer = new Serializer();
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]
var fetch = require('node-fetch')
require('dotenv').config();

router.get('/:id', async function(req, res) {
  try {
    let user = await User.findOne({ where: { key: req.params.id },
      include: [
        {
          model: Location,
          as: 'locations',
          through: { attributes: [] },
        },
      ],
    });
    res.setHeader(...defaultHeader);
    res.status(200).send(JSON.stringify(user));
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(500).send({ error })
  }
});

router.post("/:id", async function (req, res) {
  res.setHeader(...defaultHeader);
  let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
  let user = await User.findOne({where: {key: req.params.id}})
  let location = await Location.findOne({where: {yelpId: req.query.yelpId}})
  if (!location) {
    newLocation = await fetch(`https://api.yelp.com/v3/businesses/${req.query.yelpId}`, { method: 'GET', headers: headers })
      .then(response => response.json())
      .catch(error => error)
      let serializedResults = serializer.locationSerializer(newLocation)
      location = await Location.create({
        name: serializedResults.name,
        image: serializedResults.image_url,
        url: serializedResults.url,
        phone: serializedResults.display_phone,
        rating: serializedResults.rating,
        reviewCount: serializedResults.review_count,
        categories: serializedResults.categories,
        coordinates: serializedResults.coordinates,
        location: serializedResults.location,
        hours: serializedResults.hours,
        price: serializedResults.price,
        yelpId: serializedResults.yelpId
      })
      .then(location => location)
      .catch(error => error)
  }
  try {
    let userLocation = await UserLocation.create({
      userId: user.id,
      locationId: location.id,
      notes: ''
    })
    .then(userLocation => {
      res.status(201).send(JSON.stringify(userLocation));
    })
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async function(req, res) {
  try {
    let user = await User.findOne({where: {key: req.params.id}})
    let location = await Location.findOne({where: {yelpId: req.query.yelpId}})
    let userLocation = await UserLocation.findOne({where: {userId: user.id, locationId: location.id}});
    await userLocation.destroy();
    res.setHeader(...defaultHeader);
    res.status(204).send();
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(404).send({error})
  }
});

module.exports = router;
