'use strict';

var App = App || {};
App.Models = App.Models || {};

App.Models.<%= _.classify(name) %> = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response;
    }

});
