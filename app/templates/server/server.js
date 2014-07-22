'use strict';

// Module dependencies.
var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');

// Add coloring for console output
require('colors');

// Create Express server.
var app = express();
<% if (dbOption !== 'None') { %>
// Database Configuration
var db = require('./server/config/database');

// Connect to Database
<% if ('MySQL'.indexOf(dbOption) > -1) { %>var sequelize = <% } %>db(app);<% } %>

require('./server/config/express')(app, express,<% if ('MySQL'.indexOf(dbOption) > -1) { %> sequelize,<% } %> path);

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    console.log('✔ Express server listening on port '.green + '%d'.blue + ' in '.green + '%s'.blue + ' mode'.green, app.get('port'), app.get('env'));
});

// Expose App
module.exports = app;