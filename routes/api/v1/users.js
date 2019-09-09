var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
var crypto = require('crypto')
var User = require('../../../models').User;
var Location = require('../../../models').Location;
var UserLocation = require('../../../models').UserLocation;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]
require('dotenv').config();

router.get('/login', async function(req, res) {
  var encryptedKey = encrypt(req.query.p)
  try {
    let user = await User.findOne({ where: { key: encryptedKey },
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

router.get('/signup', async function(req, res) {
  var encryptedKey = encrypt(req.query.p)
  try {
    let user = await User.findOrCreate({ where: { key: encryptedKey },
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

function encrypt(input) {
  return crypto.createHmac('sha256', process.env.APP_SECRET)
                   .update(input)
                   .digest('hex')
};


module.exports = router;
