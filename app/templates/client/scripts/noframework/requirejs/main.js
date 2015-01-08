/**
*   Main Configuration
*/

'use strict';

// RequireJS configuration
require.config({
    paths: {}
});

define('init', function() {

    console.log('Welcome to Yeogurt!');

});

// Initialize the application.
require(['init']);
