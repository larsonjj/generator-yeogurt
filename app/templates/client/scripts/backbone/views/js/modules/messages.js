/**
*   Messages View
*/

'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Messages = Backbone.View.extend({

    el: '.messages',

    // Compiled template
    template: JST['client/templates/modules/messages<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        // Remove messages data when navigating to a different page
        App.messages.clear();
        // Re-render template when data changes
        this.listenTo(App.messages, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(App.messages.toJSON()));
        return this;
    }

});
