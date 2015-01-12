'use strict';

var Messages = Backbone.Model.extend({

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

module.exports = new Messages();
