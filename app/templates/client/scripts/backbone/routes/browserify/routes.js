/**
*   Router
*/

'use strict';
<% if (useAuth) { %>
var IndexController = require('./controllers/index');
var AccountController = require('./controllers/account');<% } %>
var IndexView = require('./views/index');

var Router = Backbone.Router.extend({
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
        new IndexView();
    }<% } else { %>

    login: AccountController.login,


    forgot: AccountController.forgot,

    reset: AccountController.reset,

    signup: AccountController.signup,

    settings: AccountController.settings,

    index: IndexController.index<% } %>
});

module.exports = Router;
