var express = require('express');
var router = express.Router();
var Location = require('../../../models').Location;
var Sequelize = require('sequelize')
var Op = Sequelize.Op
var defaultHeader = ["Content-Type", "application/json"]
require('dotenv').config();

module.exports = router;
