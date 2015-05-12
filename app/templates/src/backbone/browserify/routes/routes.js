'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var BaseLayoutView = require('../_layouts/base');
var IndexView = require('../_screens/index/index');
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
  '': 'index' // Default route
};

// Define all route logic here
var appController = {
  index: function index() {
    var indexView = new IndexView();

    var layout = _initializeLayout();

    // Render index view within base layout
    layout.content.show(indexView);
  }
}

// Create Router
var Router = Marionette.AppRouter.extend({
  controller: appController,
  appRoutes: appRoutes
});

// Initialize router
module.exports = new Router();

