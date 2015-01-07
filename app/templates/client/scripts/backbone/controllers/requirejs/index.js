/**
 * Index Controller
 */


define(function(require) {
    'use strict';

    var app = require('../app');
    var IndexView = require('../views/index');
    var DefaultView = require('../views/layouts/default');

    var index = function() {
        var homePage = new DefaultView({
            subviews: {
                '.content': new IndexView()
            }
        });
        app.showView(homePage);
    };

    return {
        index: index
    };

});
