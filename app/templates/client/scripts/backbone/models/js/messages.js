/**
*   Messages Model
*   Stores flash messages from server
*/

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Models = <%= _.classify(projectName) %>.Models || {};

<%= _.camelize(projectName) %>.Models.Messages = Backbone.Model.extend({

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
