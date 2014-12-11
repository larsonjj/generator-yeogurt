/**
*   Messages Model
*   Stores flash messages from server
*/

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

module.exports = Messages;
