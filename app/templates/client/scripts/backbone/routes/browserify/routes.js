/**
*   Router
*/

'use strict';
<% if (useAuth) { %>
var indexController = require('./controllers/index');
var accountController = require('./controllers/account');<% } %><% if (jsFramework === 'react') { %>
var React = require('react');<% if (useJsx) { %>
var IndexComponent = React.createFactory(require('./components/index.jsx'));<% } else { %>
var IndexComponent = require('./components/index.js');<% } %><% } else if (jsFramework === 'backbone') { %>
var IndexView = require('./views/index');<% } %>

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

    index: function() {<% if (jsFramework === 'react') { %>
        React.render(new IndexComponent(), document.getElementById('app-wrapper'));<% } else if (jsFramework === 'backbone') { %>
        // Initialize the view
        new IndexView();<% } %>
    }<% } else { %>

    login: accountController.login,

    logout: accountController.logout,

    forgot: accountController.forgot,

    reset: accountController.reset,

    signup: accountController.signup,

    settings: accountController.settings,

    index: indexController.index<% } %>
});

module.exports = Router;
