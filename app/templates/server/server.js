/**
 * Node Server Configuration
 */
'use strict';

// Module dependencies.
var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');

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

require('./server/config/express')(app, express<% if (dbOption !== 'none') { %>,  db<% } %>);

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    console.log('✔ Express server listening on port '.green + '%d'.blue + ' in '.green + '%s'.blue + ' mode'.green, app.get('port'), app.get('env'));
});

// Expose App
module.exports = app;