/**
*   Main View
*/

'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Index  = Backbone.View.extend({

    el: <% if (useAuth) { %>'.content'<% } else { %>'#app-wrapper'<% } %>,

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
