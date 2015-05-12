// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var App = require('./app');
var router = require('./routes');
var templates = require('./templates');

// Set up global click event handler to use pushState for links
// use 'data-bypass' attribute on anchors to allow normal link behavior
$(document).on('click', 'a:not([data-bypass])', function(event) {

  var href = $(this).attr('href');
  var protocol = this.protocol + '//';

  if (href.slice(protocol.length) !== protocol) {
    event.preventDefault();
    router.navigate(href, true);
  }

});

// App configuration
var config = {
  router: router,
  templates: templates
};

// Start Application
App.start(config);

// Attach app to window
window.App = App;

console.log('Welcome to Yeogurt');
