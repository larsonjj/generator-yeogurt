'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var templates = require('../../_scripts/templates');

var IndexView = Marionette.ItemView.extend({

  template: templates['src/_screens/index/index.jst'],

  events: {}

});

module.exports = IndexView;
