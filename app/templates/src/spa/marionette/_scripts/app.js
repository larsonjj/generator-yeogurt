'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// Set up the app instance
var App = new Marionette.Application();

// Define app regions
App.addRegions({
  appRegion: '#app-wrapper'
});

App.on('start', function() {
  // Start listening to route changes
  if (Backbone.history) {
    Backbone.history.start();
  }
});

App.vent.on('app:show', function(appView) {
  App.appRegion.show(appView);
});

App.addInitializer(function(config) {
  if (config.router) {
    // Attach router to App namespace for easier debugging/testing
    App.Router = config.router;
  }
  if (config.templates) {
    // Attach templates to App namespace for easier debugging/testing
    App.Templates = config.templates;
  }
});

module.exports = App;
