'use strict';

var App = App || {};
App.Models = App.Models || {};

App.Models.Messages = Backbone.Model.extend({

  initialize: function() {
  },

  defaults: {
    messages: {}
  },

  setMessages: function(data) {
    if (!_.isEmpty(data)) {
      this.set({
        messages: data
      });
    }
  }

});

// Setup flash messages
App.messages = new App.Models.Messages();
