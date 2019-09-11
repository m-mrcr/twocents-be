var express = require('express');
var router = express.Router();
var Location = require('../../../../models').Location;
var User = require('../../../../models').User;
var Sequelize = require('sequelize')
var Serializer = require('../../../../serializers/yelpToLocationSerializer.js');
var serializer = new Serializer();
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]

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
    res.status(200).send(JSON.stringify(user.locations));
  } catch (error) {
    res.setHeader(...defaultHeader);
    res.status(500).send({ error })
  }
});

// router.post('/:id', async function(req, res) {
//   try {
//     let id = req.params.id;
//     let yelpId = req.query.yelpId;
//     let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
//     let results = await fetch(`https://api.yelp.com/v3/businesses/${yelpId}`, { method: 'GET', headers: headers })
//       .then(response => response.json())
//       .catch(error => error)
//     // var serialized = serializer.LocationSerializer(results)
//     // let user = await User.findOne({where: {id: id}})
//     // let location = await Location.create({
//     //   name: serialized.name,
//     //   image: serialized.image_url,
//     //   url: serialized.url,
//     //   phone: serialized.display_phone,
//     //   rating: serialized.rating,
//     //   reviewCount: serialized.review_count,
//     //   categories: serialized.categories,
//     //   coordinates: serialized.coordinates,
//     //   location: serialized.location,
//     //   hours: serialized.hours,
//     //   price: serialized.price,
//     //   yelpId: serialized.yelpId
//     // })
//     // UserLocation.create({
//     //   userId: user.id,
//     //   locationId: location.id,
//     //   notes: ''
//     // })
//     res.setHeader(...defaultHeader)
//     res.status(201).send(JSON.stringify(results))
//     } catch (error) {
//       res.setHeader(...defaultHeader)
//       res.status(500).send({ error })
//     }
//   }
// );
//
// router.delete('/:id', async function(req, res) {
//   try {
//     User.findOne({where: {key: req.params.id}})
//   } catch {
//
//   }
// })

module.exports = router;
