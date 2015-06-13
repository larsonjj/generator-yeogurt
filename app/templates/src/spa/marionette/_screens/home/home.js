'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var HomeController = require('./home.controller');

var homeRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '/': 'showHome'
  },
  controller: new HomeController()
});

module.exports = homeRouter;
