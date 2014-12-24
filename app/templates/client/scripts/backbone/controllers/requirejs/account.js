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

    var logout = function() {
        app.user.logout();
    };

    var signup = function() {
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
        logout: logout,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settings
    };

});
