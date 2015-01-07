/**
*   Router
*/

'use strict';

var React = require('react');
var routeActions = require('./actions/routes');
var userStore = require('./stores/user');<% if (useJsx) { %>
var IndexPage = React.createFactory(require('./components/index.jsx'));
var LoginPage = React.createFactory(require('./components/account/login.jsx'));
var SignupPage = React.createFactory(require('./components/account/signup.jsx'));
var ResetPage = React.createFactory(require('./components/account/reset.jsx'));
var ForgotPage = React.createFactory(require('./components/account/forgot.jsx'));
var SettingsPage = React.createFactory(require('./components/account/settings.jsx'));<% } else { %>
var IndexPage = require('./components/index');
var LoginPage = require('./components/account/login');
var SignupPage = require('./components/account/signup');
var ResetPage = require('./components/account/reset');
var ForgotPage = require('./components/account/forgot');
var SettingsPage = require('./components/account/settings');<% } %>

var render = function(Page) {
    React.render(new Page(), document.getElementById('app-wrapper'));
};

var index = function() {
    render(IndexPage);
};

var login = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    render(LoginPage);
};

var signup = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    render(SignupPage);
};

var reset = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    render(ResetPage);
};

var forgot = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    render(ForgotPage);
};

var settings = function() {
    // If user is not logged in, redirect to login page
    if (!userStore.get().loggedIn) {
        return routeActions.setRoute('/login');
    }

    render(SettingsPage);
};

    // Defined routes
var routes = {<% if (useAuth) { %>
    '/login': login,
    '/forgot': forgot,
    '/reset/:token': reset,
    '/signup': signup,
    '/settings': settings,<% } %>
    '/': index
};

module.exports = routes;
