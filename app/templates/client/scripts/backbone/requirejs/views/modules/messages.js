define(function(require) {
  'use strict';

  var messages = require('../../models/messages');

  var Messages = Backbone.View.extend({

    el: '.messages',

    template: JST['client/templates/modules/messages<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    events: {},

    initialize: function() {
      // Re-render template when data changes
      this.listenTo(messages, 'change', this.render);
      this.render();
    },

    render: function() {
      this.$el.html(this.template(messages.toJSON()));
      return this;
    }

  });

  return Messages;

});

