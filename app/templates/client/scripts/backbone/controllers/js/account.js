/**
 * Index Controller
 */

'use strict';

var App = App || {};
App.Controllers = App.Controllers || {};

App.Controllers.Account = (function() {

    var login = function() {
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
        App.account.logout();
    };

    var signup = function() {
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
