/**
*   Router
*/

'use strict';
<% if (useAuth) { %>
var IndexController = require('./controllers/index');
var AccountController = require('./controllers/account');<% } %><% if (jsFramework === 'react') { %>
var React = require('react');<% if (useJsx) { %>
var IndexComponent = React.createFactory(require('./components/index.jsx'));<% } else { %>
var IndexComponent = require('./components/index.js');<% } %><% } %>

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
        React.render(new IndexComponent(), document.getElementById('app-wrapper'));
    }<% } else { %>

    login: AccountController.login,

    logout: AccountController.logout,

    forgot: AccountController.forgot,

    reset: AccountController.reset,

    signup: AccountController.signup,

    settings: AccountController.settings,

    index: IndexController.index<% } %>
});

module.exports = Router;
