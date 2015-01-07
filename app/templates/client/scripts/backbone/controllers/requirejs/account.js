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
    var OneColumnView = require('../views/layouts/one-column');
    var NavbarView = require('../views/modules/navbar');
    var MessagesView = require('../views/modules/messages');

    var login = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var login = new OneColumnView({
            layout: true,
            subviews: {
                '.main-nav': new NavbarView(),
                '.messages': new MessagesView(),
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
        var signup = new OneColumnView({
            layout: true,
            subviews: {
                '.main-nav': new NavbarView(),
                '.messages': new MessagesView(),
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
        var reset = new OneColumnView({
            layout: true,
            subviews: {
                '.main-nav': new NavbarView(),
                '.messages': new MessagesView(),
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
        var forgot = new OneColumnView({
            layout: true,
            subviews: {
                '.main-nav': new NavbarView(),
                '.messages': new MessagesView(),
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
        var settings = new OneColumnView({
            layout: true,
            subviews: {
                '.main-nav': new NavbarView(),
                '.messages': new MessagesView(),
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
