define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = Backbone.Model.extend({

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

    return <%= _.classify(name) %>;
});
