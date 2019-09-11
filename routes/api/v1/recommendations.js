var express = require('express');
var router = express.Router();
var Location = require('../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]
require('dotenv').config();

router.get('/:id', async function(req, res) {
  try {
    let id = req.query.id;
    let headers = {"Authorization": `Bearer ${process.env.YELP_API_KEY}`}
      if(term) {

      }
        let results = await fetch(`https://api.yelp.com/v3/businesses?term=${term}`, { method: 'GET', headers: headers})
            .then(function(response) {
              return response.json();
            })
            .catch(function(error){
              return error
            })
            res.setHeader(...defaultHeader);
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
