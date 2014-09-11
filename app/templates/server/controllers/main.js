/**
 * Main Controller
 */

'use strict';<% if (singlePageApplication && useServerTemplates) { %>
<% if (jsFramework === 'react') { %>
var reactRender = require('../modules/react-render');<% } %><% } %>

var mainController = function(req, res) {<% if (singlePageApplication) { %><% if (useServerTemplates) { %><% if (jsFramework === 'react') { %><% if (useJsx) { %>
    var html = reactRender({}, 'main.jsx');<% } else { %>
    var html = reactRender({}, 'main.js');<% } %><% } %><% } %>
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