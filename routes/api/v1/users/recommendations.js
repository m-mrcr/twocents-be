var express = require('express');
var router = express.Router();
var Location = require('../../../../models').Location;
var User = require('../../../../models').User;
var Sequelize = require('sequelize')
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

router.post('/:id', async function(req, res) {
  try {
    User.findOne({where: {key: req.params.id}})
  } catch {

  }
})

module.exports = router;
