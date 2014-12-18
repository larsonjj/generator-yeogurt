/**
*   Messages View
*/

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Views = <%= _.classify(projectName) %>.Views || {};

<%= _.camelize(projectName) %>.Views.Messages = Backbone.View.extend({

    el: '.messages',

    // Compiled template
    template: JST['client/templates/modules/messages<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        // Remove messages data when navigating to a different page
        <%= _.classify(projectName) %>.messages.clear();
        // Re-render template when data changes
        this.listenTo(<%= _.classify(projectName) %>.messages, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(<%= _.classify(projectName) %>.messages.toJSON()));
        return this;
    }

});
