// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var App = require('./app');

// Start Application
App.start();

// Attach app to window for easier debugging/testing
window.App = App;

// Set up global click event handler to use pushState for links
// use 'data-bypass' attribute on anchors to allow normal link behavior
$(document).on('click', 'a:not([data-bypass])', function(event) {

  var href = $(this).attr('href');
  var protocol = this.protocol + '//';

  if (href.slice(protocol.length) !== protocol) {
    event.preventDefault();
    // router.navigate(href, true);
  }

});

console.log('Welcome to Yeogurt');
