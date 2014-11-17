/**
 * Index Controller
 */

'use strict';

var settings = require('../config/env/default');
var path = require('path');

var indexController = function(req, res) {<% if (singlePageApplication) { %>
    res.sendfile(path.join(settings.staticAssets, '/index.html'));<% } else { %>
    res.render('index', {
        title: 'Home',
        env: process.env.NODE_ENV || 'development'
    });<% } %>
};

module.exports = {
    index: indexController
};
