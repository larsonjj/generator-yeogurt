/**
 * GET /
 * Home page.
 */

'use strict';<% if (structure === 'Single Page Application') { %>
<% if (jsTemplate === 'React') { %>
var reactRender = require('../modules/reactRender');<% } %><% if (jsTemplate === 'Jade') { %>
var jadeRender = require('../modules/jadeRender');<% } %><% if (jsTemplate === 'Handlebars') { %>
var hbsRender = require('../modules/hbsRender');<% } %><% } %>

var mainController = function(req, res) {<% if (structure === 'Single Page Application') { %>
    res.format({
        // If content-type being requested is HTML, then render out the template
        html: function(){<% if (jsTemplate === 'React') { %>
            var html = reactRender({}, 'main.jsx');<% } %><% if (jsTemplate === 'Jade') { %>
            var html = jadeRender({}, 'main.jade');<% } %><% if (jsTemplate === 'Handlebars') { %>
            var html = hbsRender({}, 'main.hbs');<% } %>
            res.render('index', {
                env: process.env.NODE_ENV || 'development',
                body: html || ''
            });
        }
    });<% } %><% if (structure === 'Static Site') { %>
    res.render('index', {
        env: process.env.NODE_ENV || 'development'
    });<% } %>
};

module.exports = {
    index: mainController
};