/**
 * GET /
 * Home page.
 */

'use strict';<% if (singlePageApplication) { %>
<% if (jsFramework === 'React') { %>
var reactRender = require('../modules/reactRender');<% } %><% if (jsTemplate === 'Jade') { %>
var jadeRender = require('../modules/jadeRender');<% } %><% if (jsTemplate === 'Handlebars') { %>
var hbsRender = require('../modules/hbsRender');<% } %><% if (jsTemplate === 'Lo-dash') { %>
var lodashRender = require('../modules/lodashRender');<% } %><% } %>

var mainController = function(req, res) {<% if (singlePageApplication) { %>
    res.format({
        // If content-type being requested is HTML, then render out the template
        html: function(){<% if (jsFramework === 'React') { %>
            var html = reactRender({}, 'main.jsx');<% } %><% if (jsTemplate === 'Jade') { %>
            var html = jadeRender({}, 'main.jade');<% } %><% if (jsTemplate === 'Handlebars') { %>
            var html = hbsRender({}, 'main.hbs');<% } %><% if (jsTemplate === 'Lo-dash') { %>
            var html = lodashRender({}, 'main.jst');<% } %>
            res.render('index', {
                env: process.env.NODE_ENV || 'development',
                body: html || ''
            });
        }
    });<% } %><% if (!singlePageApplication) { %>
    res.render('index', {
        env: process.env.NODE_ENV || 'development'
    });<% } %>
};

module.exports = {
    index: mainController
};