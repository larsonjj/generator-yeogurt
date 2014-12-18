/**
 * Index Controller
 */

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};

<%= _.camelize(projectName) %>.accountController = (function() {

    var login = function() {
        var loginPage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.LoginView()
            }
        });
        <%= _.classify(projectName) %>.showView(loginPage);
    };

    var logout = function() {
        <%= _.classify(projectName) %>.account.logout();
    };

    var signup = function() {
        var signupPage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.SignupView()
            }
        });
        <%= _.classify(projectName) %>.showView(signupPage);
    };

    var reset = function() {
        var resetPage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.ResetView()
            }
        });
        <%= _.classify(projectName) %>.showView(resetPage);
    };

    var forgot = function() {
        var forgotPage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.ForgotView()
            }
        });
        <%= _.classify(projectName) %>.showView(forgotPage);
    };

    var settingsPage = function() {
        var settingsPage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.SettingsView()
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
