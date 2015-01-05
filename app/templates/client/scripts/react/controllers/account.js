/**
 * Index Controller
 */

'use strict';

var app = require('../app');
var userStore = require('../stores/user');
var routeActions = require('../actions/route');
var userActions = require('../actions/user');
var LoginPage = require('../components/account/login');
var SignupPage = require('../components/account/signup');
var ResetPage = require('../components/account/reset');
var ForgotPage = require('../components/account/forgot');
var SettingsPage = require('../components/account/settings');

var login = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    app.render(LoginPage);
};

var logout = function() {
    // If user is not logged in, redirect to the home page
    if (!userStore.get().loggedIn) {
        return routeActions.setRoute('/');
    }
    userActions.logout();
};

var signup = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    app.render(SignupPage);
};

var reset = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    app.render(ResetPage);
};

var forgot = function() {
    // If user is logged in, redirect to settings page
    if (userStore.get().loggedIn) {
        return routeActions.setRoute('/settings');
    }

    app.render(ForgotPage);
};

var settingsPage = function() {
    // If user is not logged in, redirect to login page
    if (!userStore.get().loggedIn) {
        return routeActions.setRoute('/login');
    }

    app.render(SettingsPage);
};

module.exports = {
    login: login,
    logout: logout,
    signup: signup,
    reset: reset,
    forgot: forgot,
    settings: settingsPage
};
