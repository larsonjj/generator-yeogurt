define(function(require) {
    'use strict';<% if (useAuth) { %>

    var user = require('./models/user');
    var messages = require('./models/messages');
    var router = require('./routes');
    var LoginView = require('./views/account/login');
    var SignupView = require('./views/account/signup');
    var ResetView = require('./views/account/reset');
    var ForgotView = require('./views/account/forgot');
    var SettingsView = require('./views/account/settings');
    var DefaultView = require('./views/layouts/default');<% } %>
    var IndexView = require('./views/index');

    // Handle displaying and cleaning up views
    var currentView;
    var render = function(view) {
        if (currentView) {
            currentView.close();
        }

        currentView = view;

        $('#app-wrapper').html(currentView.render().$el);
    };

    var Router = Backbone.Router.extend({

        routes: {<% if (useAuth) { %>
            'login': 'login',
            'forgot': 'forgot',
            'reset/:token': 'reset',
            'signup': 'signup',
            'settings': 'settings',<% } %>
            '': 'index'
        },<% if (!useAuth) { %>
        index: function() {
            // Render index page
            new IndexView();
        }<% } else { %>
        index: function() {
            var homePage = new DefaultView({
                subviews: {
                    '.content': new IndexView()
                }
            });
            render(homePage);
        },

        login: function() {
            // If user is logged in, redirect to settings page
            if (user.get('loggedIn')) {
                return router.navigate('/settings', {trigger: true});
            }
            var loginPage = new DefaultView({
                subviews: {
                    '.content': new LoginView()
                }
            });
            render(loginPage);
        },


        forgot: function() {
            // If user is logged in, redirect to settings page
            if (user.get('loggedIn')) {
                return router.navigate('/settings', {trigger: true});
            }
            // If reset token is invalid or has expired, display error message
            if (window.location.search === '?error=invalid') {
                messages.setMessages({
                    errors: [{
                        msg: 'Reset is invalid or has expired.'
                    }]
                });
            }
            var forgotPage = new DefaultView({
                subviews: {
                    '.content': new ForgotView()
                }
            });
            render(forgotPage);
        },

        reset: function() {
            // If user is logged in, redirect to settings page
            if (user.get('loggedIn')) {
                return router.navigate('/settings', {trigger: true});
            }
            var resetPage = new DefaultView({
                subviews: {
                    '.content': new ResetView()
                }
            });
            render(resetPage);
        },

        signup: function() {
            // If user is logged in, redirect to settings page
            if (user.get('loggedIn')) {
                return router.navigate('/settings', {trigger: true});
            }
            var signupPage = new DefaultView({
                subviews: {
                    '.content': new SignupView()
                }
            });
            render(signupPage);
        },

        settings: function() {
            // If user is not logged in, redirect to login page
            if (!user.get('loggedIn')) {
                return router.navigate('/login', {trigger: true});
            }
            var settingsPage = new DefaultView({
                subviews: {
                    '.content': new SettingsView()
                }
            });
            render(settingsPage);
        },

        // Runs before every route loads
        execute: function(callback, args) {
            // Clear out any global messages
            messages.clear();
            if (callback) {
                callback.apply(this, args);
            }
        }<% } %>
    });

    return new Router();
});
