/**
*   Router
*/

'use strict';

var App = App || {};
App.Routers = App.Routers || {};

// Router
App.Routers.Main = Backbone.Router.extend({
    // Defined routes
    routes: {<% if (useAuth) { %>
        'login': 'login',
        'forgot': 'forgot',
        'reset/:token': 'reset',
        'signup': 'signup',
        'settings': 'settings',<% } %>
        '': 'index'
    },<% if (!useAuth) { %>

    index: function() {
        // Initialize the view
        new App.Views.Index();
    }<% } else { %>

    login: App.Controllers.Account.login,

    forgot: App.Controllers.Account.forgot,

    reset: App.Controllers.Account.reset,

    signup: App.Controllers.Account.signup,

    settings: App.Controllers.Account.settings,

    index: App.Controllers.Index.index<% } %>
});
