/**
 * Database Configuration
 */

'use strict';
var settings = require('./env/default');
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var db = {};

// Connect to database
var sequelize = new Sequelize(settings.database.url, settings.database.options);<% if (useAuth) { %>

// Import all models
fs
    .readdirSync(path.join(__dirname, '../models'))
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, '../models' , file));
        db[model.name] = model;
    });

// Associate models if `associate` method is found within model's `classMethods` object
Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});<% } %>

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
