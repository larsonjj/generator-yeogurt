'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var HomeScreen = require('../_screens/home/home');
var Wreqr = require('./wreqr');

// Set up the app instance
var App = new Marionette.Application();

// Define app regions
App.addRegions({
  // Mount point for application
  appRegion: '#app-wrapper'
});

App.on('start', function() {
  // Start listening to route changes
  if (Backbone.history) {
    Backbone.history.start();
  }
});

Wreqr.on('app:show', function(appView) {
  App.appRegion.show(appView);
});

// Screens & Modules
new HomeScreen();

module.exports = App;
