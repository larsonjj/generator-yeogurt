'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var <%= name.toLowerCase() %>Template = require('./<%= _.slugify(name.toLowerCase()) %>.jst');

var <%= _.classify(name) %>View = Marionette.ItemView.extend({

  // Template compiled by grunt-jst and attached to 'JST' namespace
  template: <%= name.toLowerCase() %>Template,

  events: {}

});

module.exports = <%= _.classify(name) %>View;
