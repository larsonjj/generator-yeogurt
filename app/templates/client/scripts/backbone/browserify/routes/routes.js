/**
*   Router
*/

'use strict';<% if (useAuth) { %>

var app = require('../app');
var LoginView = require('../views/account/login');
var SignupView = require('../views/account/signup');
var ResetView = require('../views/account/reset');
var ForgotView = require('../views/account/forgot');
var SettingsView = require('../views/account/settings');
var DefaultView = require('../views/layouts/default');<% } %>
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
    },<% if (useAuth) { %>

    index: function() {
        var homePage = new DefaultView({
            subviews: {
                '.content': new IndexView()
            }
        });
        app.showView(homePage);
    },

    login: function() {
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
    },


    forgot: function() {
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
    },

    reset: function() {
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
    },

    signup: function() {
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
    },

    settings: function() {
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
    }<% } %>
});

module.exports = Router;
