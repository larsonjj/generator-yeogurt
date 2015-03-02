'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Index = Backbone.View.extend({

  el: '#app-wrapper',

  template: JST['client/app/index/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }
});
