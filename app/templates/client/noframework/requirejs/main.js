'use strict';

// RequireJS configuration
require.config({
  paths: {}
});

// Main javascript entry point
// Should handle bootstrapping/starting application
define('init', function() {

  console.log('Welcome to Yeogurt!');

});

// Initialize the application.
require(['init']);
