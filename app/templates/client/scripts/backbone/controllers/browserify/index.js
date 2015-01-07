/**
 * Index Controller
 */

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

module.exports = {
    index: index
};
