/**
*   Messages Model
*   Stores flash messages from server
*/

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};

<%= _.camelize(projectName) %>.MessagesModel = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
        messages: {}
    },

    showMessages: function(data) {
        if (!_.isEmpty(data)) {
            <%= _.classify(projectName) %>.messages.set({
                messages: data
            });
        }
    }

});
