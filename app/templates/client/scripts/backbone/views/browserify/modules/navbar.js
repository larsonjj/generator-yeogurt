/**
*   Navbar View
*/

'use strict';

var Navbar = Backbone.View.extend({

    el: '.navbar',

    // Compiled template
    template: JST['client/templates/modules/navbar<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        // Re-render template when data changes
        this.listenTo(<%= _.classify(projectName) %>.account, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template({
            loggedIn: <%= _.classify(projectName) %>.account.get('loggedIn'),
            user: <%= _.classify(projectName) %>.account.toJSON()
        }));
        return this;
    }

});

module.exports = Navbar;
