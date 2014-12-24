/**
*   Navbar View
*/

'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Navbar = Backbone.View.extend({

    el: '.main-nav',

    // Compiled template
    template: JST['client/templates/modules/navbar<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        // Re-render template when data changes
        this.listenTo(App.account, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template({
            loggedIn: App.account.get('loggedIn'),
            user: App.account.toJSON()
        }));
        return this;
    }

});
