/**
 * Index Controller
 */

'use strict';

<%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

<%= _.camelize(projectName) %>.indexController = (function() {

    var index = function() {
        var homePage = new <%= _.camelize(projectName) %>.OneColumnView({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.NavbarView(),
                '.messages': new <%= _.camelize(projectName) %>.MessagesView(),
                '.content': new <%= _.camelize(projectName) %>.IndexView()
            }
        });
        app.showView(homePage);
    };

    return {
        index: index
    };

})();

