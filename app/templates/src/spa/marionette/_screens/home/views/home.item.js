'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var homeTemplate = require('./home.item.jst');

var HomeView = Marionette.ItemView.extend({

  // Template compiled by grunt-jst and attached to 'JST' namespace
  template: homeTemplate,

  events: {}

});

module.exports = HomeView;
