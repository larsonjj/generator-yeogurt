/**
 * Index Controller
 */

'use strict';

var <%= _.classify(projectName) %> = <%= _.classify(projectName) %> || {};
<%= _.classify(projectName) %>.Controllers = <%= _.classify(projectName) %>.Controllers || {};

<%= _.camelize(projectName) %>.Controllers.Index = (function() {

    var index = function() {
        var homePage = new <%= _.camelize(projectName) %>.Views.OneColumn({
            layout: true,
            subviews: {
                '.navbar': new <%= _.camelize(projectName) %>.Views.Navbar(),
                '.messages': new <%= _.camelize(projectName) %>.Views.Messages(),
                '.content': new <%= _.camelize(projectName) %>.Views.Index()
            }
        });
        <%= _.classify(projectName) %>.showView(homePage);
    };

    return {
        index: index
    };

})();

