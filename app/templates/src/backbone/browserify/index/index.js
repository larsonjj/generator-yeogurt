'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

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
