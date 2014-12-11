/**
 * Index Controller
 */

'use strict';

define(function(require) {

    var LoginView = require('../views/account/login');
    var SignupView = require('../views/account/signup');
    var ResetView = require('../views/account/reset');
    var ForgotView = require('../views/account/forgot');
    var SettingsView = require('../views/account/settings');
    var OneColumnView = require('../views/layouts/one-column');
    var NavbarView = require('../views/modules/navbar');
    var MessagesView = require('../views/modules/messages');

    var login = function() {
        var loginPage = new OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new NavbarView(),
                '.messages': new MessagesView(),
                '.content': new LoginView()
            }
        });
        app.showView(loginPage);
    };

    var logout = function() {
        app.account.logout();
    };

    var signup = function() {
        var signupPage = new OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new NavbarView(),
                '.messages': new MessagesView(),
                '.content': new SignupView()
            }
        });
        app.showView(signupPage);
    };

    var reset = function() {
        var resetPage = new OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new NavbarView(),
                '.messages': new MessagesView(),
                '.content': new ResetView()
            }
        });
        app.showView(resetPage);
    };

    var forgot = function() {
        var forgotPage = new OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new NavbarView(),
                '.messages': new MessagesView(),
                '.content': new ForgotView()
            }
        });
        app.showView(forgotPage);
    };

    var settingsPage = function() {
        var settingsPage = new OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new NavbarView(),
                '.messages': new MessagesView(),
                '.content': new SettingsView()
            }
        });
        app.showView(settingsPage);
    };

    return {
        login: login,
        logout: logout,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settingsPage
    };

});
