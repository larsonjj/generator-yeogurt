/**
*   Router
*/

'use strict';

<%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

// Router
<%= _.camelize(projectName) %>.Router = Backbone.Router.extend({
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
        new <%= _.camelize(projectName) %>.IndexView();
    }<% } else { %>

    login: <%= _.camelize(projectName) %>.accountController.login,

    logout: <%= _.camelize(projectName) %>.accountController.logout,

    forgot: <%= _.camelize(projectName) %>.accountController.forgot,

    reset: <%= _.camelize(projectName) %>.accountController.reset,

    signup: <%= _.camelize(projectName) %>.accountController.signup,

    settings: <%= _.camelize(projectName) %>.accountController.settings,

    index: <%= _.camelize(projectName) %>.indexController.index<% } %>
});
