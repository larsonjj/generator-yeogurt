'use strict';

// RequireJS configuration
require.config({
  paths: {}
});

define('init', function(require) {

  console.log('Welcome to Yeogurt!');

});

// Initialize the application.
require(['init']);
