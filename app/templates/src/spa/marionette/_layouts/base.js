'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var BaseLayoutView = Marionette.LayoutView.extend({

  // Template compiled by grunt-jst and attached to 'JST' namespace
  template: JST['src/_layouts/base.jst'],

  regions: {
    content: '#base-layout-wrapper'
  }

});

module.exports = BaseLayoutView;
