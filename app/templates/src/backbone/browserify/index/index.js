'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
<% if (jsTemplate === 'handlebars') { %>
// Attach Handlebars runtime to window
var Handlebars = require('../../node_modules/handlebars/runtime');

// Include compiled Handlebars templates
// Templates are compiled by the handlebars grunt task
var JST = require('../../../.tmp/scripts/templates')(Handlebars);<% } else if (jsTemplate === 'underscore') { %>
var _ = require('underscore');

// Include compiled Underscore templates
// Templates are compiled by the jst grunt task
var JST = require('../../../.tmp/scripts/templates')(_);<% } %>

var IndexView = Backbone.View.extend({

  el: '#app-wrapper',

  template: JST['src/_screens/index/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});

module.exports = IndexView;
