// Database Configuration

'use strict';
var settings = require('./env/default');
var Sequelize = require('sequelize');
var db = {};

// Connect to database
var sequelize = new Sequelize(settings.database.url, settings.database.options);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
