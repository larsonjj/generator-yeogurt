/**
*   Router
*/

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Routers = <%= _.classify(projectName) %>.Routers || {};

// Router
<%= _.camelize(projectName) %>.Routers.Main = Backbone.Router.extend({
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
        new <%= _.camelize(projectName) %>.Views.Index();
    }<% } else { %>

    login: <%= _.camelize(projectName) %>.Controllers.Account.login,

    logout: <%= _.camelize(projectName) %>.Controllers.Account.logout,

    forgot: <%= _.camelize(projectName) %>.Controllers.Account.forgot,

    reset: <%= _.camelize(projectName) %>.Controllers.Account.reset,

    signup: <%= _.camelize(projectName) %>.Controllers.Account.signup,

    settings: <%= _.camelize(projectName) %>.Controllers.Account.settings,

    index: <%= _.camelize(projectName) %>.Controllers.Index.index<% } %>
});
