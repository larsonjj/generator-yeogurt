/**
 * Index Controller
 */

'use strict';

<%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

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
        app.showView(loginPage);
    };

    var logout = function() {
        app.account.logout();
    };

    var signup = function() {
        var signupPage = new <%= _.camelize(projectName) %>.<%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.SignupView()
            }
        });
        app.showView(signupPage);
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
        app.showView(resetPage);
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
        app.showView(forgotPage);
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
        app.showView(settingsPage);
    };

    return = {
        login: login,
        logout: logout,
        signup: signup,
        reset: reset,
        forgot: forgot,
        settings: settingsPage
    };

})();
