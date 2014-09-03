/**
 * GET /
 * Home page.
 */

'use strict';<% if (singlePageApplication && useServerTemplates) { %>
<% if (jsFramework === 'react') { %>
var reactRender = require('../modules/reactRender');<% } %><% } %>

var mainController = function(req, res) {<% if (singlePageApplication) { %><% if (useServerTemplates) { %><% if (jsFramework === 'react') { %>
    var html = reactRender({}, 'main.jsx');<% } %><% } %>
    res.render('index', {
        env: process.env.NODE_ENV || 'development'<% if (useServerTemplates) { %>,
        body: html || ''<% } %>
    });
    <% } %><% if (!singlePageApplication) { %>
    res.render('index', {
        env: process.env.NODE_ENV || 'development'
    });<% } %>
};

module.exports = {
    index: mainController
};