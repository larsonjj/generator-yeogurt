/**
 * Index Controller
 */

'use strict';

var IndexView = require('../views/index');
var OneColumnView = require('../views/layouts/one-column');
var NavbarView = require('../views/modules/navbar');
var MessagesView = require('../views/modules/messages');

var index = function() {
    var homePage = new OneColumnView({
        layout: true,
        subviews: {
            '.navbar': new NavbarView(),
            '.messages': new MessagesView(),
            '.content': new IndexView()
        }
    });
    <%= _.classify(projectName) %>.showView(homePage);
};

module.exports = {
    index: index
};
