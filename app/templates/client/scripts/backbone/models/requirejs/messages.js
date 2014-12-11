/**
*   Messages Model
*   Stores flash messages from server
*/

define(function(require) {
    'use strict';

    var Messages = Backbone.Model.extend({

        initialize: function() {
        },

        defaults: {
            messages: {}
        },

        showMessages: function(data) {
            if (!_.isEmpty(data)) {
                app.messages.set({
                    messages: data
                });
            }
        }

    });

    return Messages;

});

