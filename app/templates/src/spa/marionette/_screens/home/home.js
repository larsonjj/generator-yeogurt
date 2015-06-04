'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var IndexView = Marionette.ItemView.extend({

  // Template compiled by grunt-jst and attached to 'JST' namespace
  template: JST['src/_screens/home/home.jst'],

  events: {}

});

module.exports = IndexView;
