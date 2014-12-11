/**
*   Navbar View
*/

define(function() {
    'use strict';

    var Navbar = Backbone.View.extend({

        el: '.navbar',

        // Compiled template
        template: JST['client/templates/modules/navbar.hbs'],

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
