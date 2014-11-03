/**
 * Node Server Configuration
 */
'use strict';

// Module dependencies.
var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');
var fs = require('fs');

// Add coloring for console output
require('colors');

// Create Express server.
var app = express();
<% if (dbOption !== 'none') { %>
// Database Configuration<% if (dbOption === 'mysql') { %>
var db = require('./server/config/database');

// Verify DB connection
db.sequelize.authenticate().complete(function(err) {
    if (!!err) {
        console.error('✗ Database Connection Error: \n'.red, err);
    }
    else {
        console.log('✔ MySQL Connection Success!'.green);
    }
});<% } else if (dbOption === 'mongodb') { %>
var db = require('./server/config/database')(app);<% } %><% } %>

// Express configuration
require('./server/config/express')(app, express<% if (dbOption !== 'none') { %>, db<% } %>);

// Load routes
fs.readdirSync('./server/routes').forEach(function(file) {
    var route = './server/routes/' + file;
    require(route)(app);
});

/**
 * 500 Error Handler.
 * As of Express 4.0 it must be placed at the end of all routes.
 */
app.use(errorHandler());

<% if (dbOption === 'mysql') { %>
// Verify DB connection
db.sequelize.authenticate().complete(function(err) {
    if (!!err) {
        console.error('✗ Database Connection Error: \n'.red, err);
    }
    else {
        console.log('✔ MySQL Connection Success!'.green);
        db.sequelize.sync()
            .success(function() {
                console.log('✔ Database Synced!'.green);
            }).error(function() {
                console.error('✗ Database Not Synced!'.red);
            })
    }
});<% } %>

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    console.log('✔ Express server listening on port '.green + '%d'.blue + ' in '.green + '%s'.blue + ' mode'.green, app.get('port'), app.get('env'));
});

// Expose App
module.exports = app;
