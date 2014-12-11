/**
*   Router
*/

define(function(require) {
    'use strict';<% if (useAuth) { %>

    var indexController = require('./controllers/index');
    var accountController = require('./controllers/account');<% } else { %>

    var IndexView = require('./views/index');

    var Router = Backbone.Router.extend({
        // Defined routes
        routes: {<% if (useAuth) { %>
            'login': 'login',
            'logout': 'logout',
            'forgot': 'forgot',
            'reset/:token': 'reset',
            'signup': 'signup',
            'settings': 'settings',<% } %>
            '': 'index'
        },<% if (!useAuth) { %>

        index: function() {
            // Initialize the view
            new IndexView();
        }<% } else { %>

        login: accountController.login,

        logout: accountController.logout,

        forgot: accountController.forgot,

        reset: accountController.reset,

        signup: accountController.signup,

        settings: accountController.settings,

        index: indexController.index<% } %>
    });

    return Router;
});
