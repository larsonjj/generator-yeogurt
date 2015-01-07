/**
*   Messages Model
*   Stores flash messages from server
*/

'use strict';

var app = require('../app');

var Messages = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
        messages: {}
    },

    showMessages: function(data) {
        if (!_.isEmpty(data)) {
            this.set({
                messages: data
            });
        }
    }

});

module.exports = Messages;
