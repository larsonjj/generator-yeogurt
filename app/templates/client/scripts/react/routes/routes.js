/**
*   Router
*/

'use strict';
<% if (useAuth) { %>
var IndexController = require('./controllers/index');
var AccountController = require('./controllers/account');<% } else { %>
var app = require('./app');
var React = require('react');<% if (useJsx) { %>
var IndexComponent = React.createFactory(require('./components/index.jsx'));<% } else { %>
var IndexComponent = require('./components/index.js');<% } %><% } %>

    // Defined routes
var routes = {<% if (useAuth) { %>
    '/login': AccountController.login,
    '/logout': AccountController.logout,
    '/forgot': AccountController.forgot,
    '/reset/:token': AccountController.reset,
    '/signup': AccountController.signup,
    '/settings': AccountController.settings,<% } %>
    '/': <% if (!useAuth) { %>function() {
        app.render(IndexComponent);
    }<% } else { %>IndexController.index<% } %>
};

module.exports = routes;
