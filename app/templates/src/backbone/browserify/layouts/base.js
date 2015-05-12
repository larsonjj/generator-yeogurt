'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var templates = require('../_scripts/templates');

var BaseLayoutView = Marionette.LayoutView.extend({

  template: templates['src/_screens/index/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } %>'],

  regions: {
    content: "#base-layout-wrapper"
  }

});

module.exports = BaseLayoutView;
