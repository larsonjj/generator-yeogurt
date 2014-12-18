/**
 * Index Controller
 */

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Controllers = <%= _.classify(projectName) %>.Controllers || {};

<%= _.camelize(projectName) %>.Controllers.Account = (function() {

    var login = function() {
        var loginPage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Login()
            }
        });
        <%= _.classify(projectName) %>.showView(loginPage);
    };

    var logout = function() {
        <%= _.classify(projectName) %>.account.logout();
    };

    var signup = function() {
        var signupPage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Signup()
            }
        });
        <%= _.classify(projectName) %>.showView(signupPage);
    };

    var reset = function() {
        var resetPage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Reset()
            }
        });
        <%= _.classify(projectName) %>.showView(resetPage);
    };

    var forgot = function() {
        var forgotPage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Forgot()
            }
        });
        <%= _.classify(projectName) %>.showView(forgotPage);
    };

    var settingsPage = function() {
        var settingsPage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Settings()
            }
        });
        <%= _.classify(projectName) %>.showView(settingsPage);
    };

    return {
        login: login,
        logout: logout,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settingsPage
    };

})();
