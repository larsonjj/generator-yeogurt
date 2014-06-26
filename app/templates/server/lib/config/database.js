/**
 * Module dependencies.
 */

'use strict';
<% if (dbOption === 'MongoDB') { %>
var mongoose = require('mongoose');
var settings = require('./settings');<% } %>

// Add coloring for console output
require('colors');

/**
 * Mongoose configuration.
 */
module.exports.connect = function(db) {
    <% if (dbOption === 'MongoDB') { %>

    if (db === 'mongodb') {
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

        // Success handler
        mongoose.connection.on('connected', function() {
            console.log('✔ MongoDB Connection Success!'.green);
        });

        // Error handler
        mongoose.connection.on('error', function() {
            console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.'.red);
        });

    }<% } %><% if ('MySQL PostgreSQL'.indexOf(dbOption) > -1) { %>
    if ('mysql postgresql'.indexOf(db) > -1) {
        var sequelize = require('../modules/sequelize')(db);
        sequelize.authenticate().complete(function(err) {
            if ( !! err) {
                console.error('✗ Database Connection Error: \n'.red, err);
            }
            else {
                console.log('✔ Database Connection Success!'.green);
            }
        });
    }<% } %>
    else {
        console.log('✗ Incorrect Database Configuration!'.red);
    }
};