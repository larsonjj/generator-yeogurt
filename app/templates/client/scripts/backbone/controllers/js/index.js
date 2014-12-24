/**
 * Index Controller
 */

'use strict';

var App = App || {};
App.Controllers = App.Controllers || {};

App.Controllers.Index = (function() {

    var index = function() {
        var homePage = new App.Views.OneColumn({
            layout: true,
            subviews: {
                '.main-nav': new App.Views.Navbar(),
                '.messages': new App.Views.Messages(),
                '.content': new App.Views.Index()
            }
        });
        App.showView(homePage);
    };

    return {
        index: index
    };

})();

