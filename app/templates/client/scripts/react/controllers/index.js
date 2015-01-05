/**
 * Index Controller
 */

'use strict';

var app = require('../app');
var IndexPage = require('../components/index');

var index = function() {
    app.render(IndexPage);
};

module.exports = {
    index: index
};
