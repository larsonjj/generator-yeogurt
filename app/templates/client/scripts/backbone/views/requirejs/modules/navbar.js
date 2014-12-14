/**
*   Navbar View
*/

define(function(require) {
    'use strict';

    var app = require('app');
    var Navbar = Backbone.View.extend({

        el: '.navbar',

        // Compiled template
        template: JST['client/templates/modules/navbar<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

        // Delegated events
        events: {},

        // Code that runs when View is initialized
        initialize: function () {
            // Re-render template when data changes
            this.listenTo(app.account, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template({
                loggedIn: app.account.get('loggedIn'),
                user: app.account.toJSON()
            }));
            return this;
        }

    });

    return Navbar;

});
