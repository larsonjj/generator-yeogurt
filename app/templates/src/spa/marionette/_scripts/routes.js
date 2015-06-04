'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var BaseLayoutView = require('../_layouts/base');
var HomeView = require('../_screens/home/home');
var App = require('./app');

// Private function that mounts base layout
var _initializeLayout = function() {
  var baseLayout = new BaseLayoutView();

  // Trigger mounting base layout within DOM
  App.vent.trigger('app:show', baseLayout);

  return baseLayout;
};

// Define all routes here
var appRoutes = {
  '': 'home' // Default route
};

// Define all route logic here
var appController = {
  home: function home() {
    var homeView = new HomeView();

    var layout = _initializeLayout();

    // Render home view within base layout
    layout.content.show(homeView);
  }
};

// Create Router
var Router = Marionette.AppRouter.extend({
  controller: appController,
  appRoutes: appRoutes
});

// Initialize router
module.exports = new Router();

