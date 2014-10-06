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

// Database Connection.
var databaseConfig = function(app) {

    var env = app.get('env');

    var connect = function() {
        var options = {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            },
            auto_reconnect: true
        };
        // Connect to database
        mongoose.connect(settings.database.url, options);
    };
    connect();

    if ('development' === env) {
        mongoose.set('debug', true);
    }

    // Import all models
    fs
        .readdirSync(path.join(__dirname, '../models'))
        .forEach(function(file) {
            var name = path.basename(file, '.js');
            var model = mongoose.model(name, require(path.join(__dirname, '../models', file)));
            db[name] = model;
        });

    // Success handler
    mongoose.connection.on('connected', function() {
        console.log('✔ MongoDB Connection Success!'.green);
    });

    // Error handler
    mongoose.connection.on('error', function() {
        console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.'.red);
    });

    return db;
};

module.exports = databaseConfig;