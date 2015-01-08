/**
*   Messages View
*/

'use strict';

var messages = require('../../models/messages');

var Messages = Backbone.View.extend({

    el: '.messages',

    // Compiled template
    template: JST['client/templates/modules/messages<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
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

module.exports = Messages;
