/**
 * Index Controller
 */

'use strict';

var App = App || {};
App.Controllers = App.Controllers || {};

App.Controllers.Account = (function() {

    var login = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var loginPage = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Login()
            }
        });
        App.showView(loginPage);
    };

    var logout = function() {
        // If user is not logged in, redirect to the home page
        if (!app.user.get('loggedIn')) {
            return app.router.navigate('/', {trigger: true});
        }
        App.user.logout();
    };

    var signup = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var signupPage = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Signup()
            }
        });
        App.showView(signupPage);
    };

    var reset = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var resetPage = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Reset()
            }
        });
        App.showView(resetPage);
    };

    var forgot = function() {
        // If user is logged in, redirect to settings page
        if (app.user.get('loggedIn')) {
            return app.router.navigate('/settings', {trigger: true});
        }
        var forgotPage = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Forgot()
            }
        });
        App.showView(forgotPage);
    };

    var settings = function() {
        // If user is not logged in, redirect to login page
        if (!app.user.get('loggedIn')) {
            return app.router.navigate('/login', {trigger: true});
        }
        var settings = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Settings()
            }
        });
        App.showView(settings);
    };

    return {
        login: login,
        logout: logout,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settings
    };

})();
