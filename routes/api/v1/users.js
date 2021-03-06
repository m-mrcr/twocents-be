var express = require('express');
const fetch = require('node-fetch')
var crypto = require('crypto')
var defaultHeader = ["Content-Type", "application/json"]
var router = express.Router();
require('dotenv').config();
var User = require('../../../models').User;
var Location = require('../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op

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

router.post('/signup', async function(req, res) {
  var encryptedKey = await encrypt(req.query.p)
  res.setHeader(...defaultHeader);
  let user = await User.findOne({where: {key: encryptedKey}})
  if(user) {
    res.status(409).send();
  } else {
    User.create({key: encryptedKey})
      .then(user => {
          res.status(201).send(JSON.stringify(user));
      })
      .catch(error => {
        res.status(500).send({ error });
      });
  }
});

function encrypt(input) {
  return crypto.createHmac('sha256', process.env.APP_SECRET)
                   .update(input)
                   .digest('hex')
};

module.exports = router;
