'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Index  = Backbone.View.extend({

  el: <% if (useAuth) { %>'.content'<% } else { %>'#app-wrapper'<% } %>,

  template: JST['client/templates/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } %>'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }
});
