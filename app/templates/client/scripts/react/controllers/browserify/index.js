/**
 * Index Controller
 */

'use strict';

var app = require('../app');
var IndexView = require('../views/index');
var OneColumnView = require('../views/layouts/one-column');
var NavbarView = require('../views/modules/navbar');
var MessagesView = require('../views/modules/messages');

var index = function() {
    var homePage = new OneColumnView({
        layout: true,
        subviews: {
            '.main-nav': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new IndexView()
        }
    });
    app.showView(homePage);
};

module.exports = {
    index: index
};
