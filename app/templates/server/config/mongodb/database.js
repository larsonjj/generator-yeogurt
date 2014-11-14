/**
 * Database Configuration
 */

'use strict';
var mongoose = require('mongoose');
var settings = require('./env/default');
var fs = require('fs');
var path = require('path');
var db = {};

// Add coloring for console output
require('colors');

var databaseConfig = function(app) {

    var env = app.get('env');

    // Connect to database
    mongoose.connect(settings.database.url, settings.database.options);

    if ('development' === env) {
        mongoose.set('debug', true);
    }<% if (useAuth) { %>

    // Import all models
    fs.readdirSync(path.join(__dirname, '../models')).forEach(function(file) {
        var name = path.basename(file, '.js');
        var model = mongoose.model(name, require(path.join(__dirname, '../models', file)));
        db[name] = model;
    });<% } %>

    return db;
};

module.exports = databaseConfig;
