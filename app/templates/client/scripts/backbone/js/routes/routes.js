/**
*   Router
*/

'use strict';

var App = App || {};
App.Routers = App.Routers || {};

// Router
App.Routers.Main = Backbone.Router.extend({
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
        var homePage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Index()
            }
        });
        App.showView(homePage);
    },

    login: function() {
        // If user is logged in, redirect to settings page
        if (App.user.get('loggedIn')) {
            return App.router.navigate('/settings', {trigger: true});
        }
        var loginPage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Login
            }
        });
        App.showView(loginPage);
    },


    forgot: function() {
        // If user is logged in, redirect to settings page
        if (App.user.get('loggedIn')) {
            return App.router.navigate('/settings', {trigger: true});
        }
        var forgotPage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Forgot
            }
        });
        App.showView(forgotPage);
    },

    reset: function() {
        // If user is logged in, redirect to settings page
        if (App.user.get('loggedIn')) {
            return App.router.navigate('/settings', {trigger: true});
        }
        var resetPage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Reset
            }
        });
        App.showView(resetPage);
    },

    signup: function() {
        // If user is logged in, redirect to settings page
        if (App.user.get('loggedIn')) {
            return App.router.navigate('/settings', {trigger: true});
        }
        var signupPage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Signup
            }
        });
        App.showView(signupPage);
    },

    settings: function() {
        // If user is not logged in, redirect to login page
        if (!App.user.get('loggedIn')) {
            return App.router.navigate('/login', {trigger: true});
        }
        var settingsPage = new App.Views.Default({
            subviews: {
                '.content': new App.Views.Settings
            }
        });
        App.showView(settingsPage);
    }<% } %>
});
