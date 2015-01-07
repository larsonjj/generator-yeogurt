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
var DefaultView = require('../views/layouts/default');

var login = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var loginPage = new DefaultView({
        subviews: {
            '.content': new LoginView()
        }
    });
    app.showView(loginPage);
};

var signup = function() {
    // If user is logged in, redirect to settings page
    if (app.user.get('loggedIn')) {
        return app.router.navigate('/settings', {trigger: true});
    }
    var signupPage = new DefaultView({
        subviews: {
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
    var resetPage = new DefaultView({
        subviews: {
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
    var forgotPage = new DefaultView({
        subviews: {
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
    var settingsPage = new DefaultView({
        subviews: {
            '.content': new SettingsView()
        }
    });
    app.showView(settingsPage);
};

module.exports = {
    login: login,
    signup: signup,
    reset: reset,
    forgot: forgot,
    settings: settingsPage
};
