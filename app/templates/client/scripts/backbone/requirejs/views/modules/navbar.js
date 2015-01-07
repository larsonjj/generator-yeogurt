/**
*   Navbar View
*/

define(function(require) {
    'use strict';

    var app = require('../../app');

    var Navbar = Backbone.View.extend({

        el: '.main-nav',

        // Compiled template
        template: JST['client/templates/modules/navbar<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

        // Delegated events
        events: {
            'click #logoutLink': 'handleLogout'
        },

        // Code that runs when View is initialized
        initialize: function() {
            // Re-render template when data changes
            this.listenTo(app.user, 'change', this.render);
            this.render();
        },

        handleLogout: function(e) {
            e.preventDefault();
            app.user.logout();
        },

        render: function() {
            this.$el.html(this.template({
                loggedIn: app.user.get('loggedIn'),
                user: app.user.toJSON()
            }));
            return this;
        }

    });

    return Navbar;

});
