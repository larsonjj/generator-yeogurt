'use strict';

// Module dependencies.
var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');
var passport = require('passport');

// Add coloring for console output
require('colors');
<% if (dbOption !== 'None') { %>
// Database Configuration
var db = require('./lib/config/database');

// Connect to Database
<% if ('MySQL'.indexOf(dbOption) > -1) { %>var sequelize = <% } %>db.connect();<% } %>

// Create Express server.
var app = express();
require('./lib/config/express')(app, passport, express,<% if ('MySQL'.indexOf(dbOption) > -1) { %> sequelize,<% } %> path);

// Load all routes
require('fs').readdirSync('./lib/routes').forEach(function(file) {
    require('./lib/routes/' + file)(app, passport);
});

app.use(function(req, res, next) {
    // Keep track of previous URL to redirect back to
    // original destination after a successful login.
    if (req.method !== 'GET') {
        return next();
    }
    var path = req.path.split('/')[1];
    if (/(auth|login|logout|signup)$/i.test(path)) {
        return next();
    }
    req.session.returnTo = req.path;
    next();
});

/**
 * 500 Error Handler.
 * As of Express 4.0 it must be placed at the end of all routes.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    console.log('✔ Express server listening on port '.green + '%d'.blue + ' in '.green + '%s'.blue + ' mode'.green, app.get('port'), app.get('env'));
});

// Expose App
module.exports = app;