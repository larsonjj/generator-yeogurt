/**
*   Main Configuration
*/

'use strict';

// RequireJS configuration
require.config({
    paths: {}
});

define('init', function(require) {

    var app = require('./app');

    console.log(app.welcome);

});

// Initialize the application.
require(['init']);
