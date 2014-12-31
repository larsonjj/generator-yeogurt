/**
 * Index Controller
 */

'use strict';

var app = require('../app');
var LoginView = require('../views/account/login');
var SignupView = require('../views/account/signup');
var ResetView = require('../views/account/reset');
var ForgotView = require('../views/account/forgot');
var SettingsView = require('../views/account/settings');
var OneColumnView = require('../views/layouts/one-column');
var NavbarView = require('../views/modules/navbar');
var MessagesView = require('../views/modules/messages');

var login = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var loginPage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new LoginView()
        }
    });
    app.showView(loginPage);
};

var logout = function() {
    // If user is not logged in, redirect to the home page
    if (!app.user.get('loggedIn')) {
        return app.router.navigate('/', {trigger: true});
    }
    app.user.logout();
};

var signup = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var signupPage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new SignupView()
        }
    });
    app.showView(signupPage);
};

var reset = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var resetPage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new ResetView()
        }
    });
    app.showView(resetPage);
};

var forgot = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var forgotPage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new ForgotView()
        }
    });
    app.showView(forgotPage);
};

var settingsPage = function() {
    // If user is not logged in, redirect to login page
    if (!app.user.get('loggedIn')) {
        return app.router.navigate('/login', {trigger: true});
    }
    var settingsPage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new SettingsView()
        }
    });
    app.showView(settingsPage);
};

module.exports = {
    login: login,
    logout: logout,
    signup: signup,
    reset: reset,
    forgot: forgot,
    settings: settingsPage
};
