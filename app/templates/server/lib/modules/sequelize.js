'use strict';

var Sequelize = require('sequelize');
var settings = require('../config/settings');

module.exports = function(db) {
    var options = {};

    // Database Type
    // - currently supported: 'mysql' and 'postgres'
    if ('postgresql'.indexOf(db)) {
        options.dialect = 'postgres';
    }
    else {
        options.dialect = 'mysql'; // default
    }

    // Connect to database
    return new Sequelize(settings.database.url, options);
};