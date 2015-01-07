/**
 * Index Controller
 */


define(function(require) {
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
        var login = new DefaultView({
            subviews: {
                '.content': new LoginView()
            }
        });
        app.showView(login);
    };

    var signup = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var signup = new DefaultView({
            subviews: {
                '.content': new SignupView()
            }
        });
        app.showView(signup);
    };

    var reset = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var reset = new DefaultView({
            subviews: {
                '.content': new ResetView()
            }
        });
        app.showView(reset);
    };

    var forgot = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var forgot = new DefaultView({
            subviews: {
                '.content': new ForgotView()
            }
        });
        app.showView(forgot);
    };

    var settings = function() {
        // If user is not logged in, redirect to login page
        if (!app.user.get('loggedIn')) {
            return app.router.navigate('/login', {trigger: true});
        }
        var settings = new DefaultView({
            subviews: {
                '.content': new SettingsView()
            }
        });
        app.showView(settings);
    };

    return {
        login: login,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settings
    };

});
