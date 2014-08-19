/**
 * GET /
 * Home page.
 */

'use strict';<% if (singlePageApplication) { %>
<% if (jsFramework === 'react') { %>
var reactRender = require('../modules/reactRender');<% } %><% if (jsTemplate === 'jade') { %>
var jadeRender = require('../modules/jadeRender');<% } %><% if (jsTemplate === 'handlebars') { %>
var hbsRender = require('../modules/hbsRender');<% } %><% if (jsTemplate === 'lodash') { %>
var lodashRender = require('../modules/lodashRender');<% } %><% } %>

var mainController = function(req, res) {<% if (singlePageApplication) { %>
    res.format({
        // If content-type being requested is HTML, then render out the template
        html: function(){<% if (jsFramework === 'react') { %>
            var html = reactRender({}, 'main.jsx');<% } %><% if (jsTemplate === 'jade') { %>
            var html = jadeRender({}, 'main.jade');<% } %><% if (jsTemplate === 'handlebars') { %>
            var html = hbsRender({}, 'main.hbs');<% } %><% if (jsTemplate === 'lodash') { %>
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