/**
*   Main View
*/

'use strict';

<%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

<%= _.camelize(projectName) %>.IndexView  = Backbone.View.extend({
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#app-wrapper',

    // Load up JST template
    template: JST['client/templates/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        this.render();
    },

    // Logic to render out template
    render: function () {
        this.$el.html(this.template);
        return this;
    }
});
