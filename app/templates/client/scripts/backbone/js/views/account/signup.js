'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Signup = Backbone.View.extend({

  el: '.content',

  template: JST['client/templates/account/signup<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

  events: {
    'submit form': 'formSubmit'
  },

  initialize: function() {
    this.render();
  },

  formSubmit: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    App.user.signup($form);
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
