/**
 * GET /
 * Home page.
 */

'use strict';<% if (structure === 'Single Page Application') { %>
<% if (jsTemplate === 'React') { %>
var reactRender = require('../modules/reactRender');<% } %><% if (jsTemplate === 'Jade') { %>
var jadeRender = require('../modules/jadeRender');<% } %><% if (jsTemplate === 'Handlebars') { %>
var hbsRender = require('../modules/hbsRender');<% } %><% } %>

module.exports = {
    index: function(req, res) {<% if (structure === 'Single Page Application') { %>
        res.format({
            // If content-type being requested is HTML, then render out the template
            html: function(){<% if (jsTemplate === 'React') { %>
                var html = reactRender({}, 'home.jsx');<% } %><% if (jsTemplate === 'Jade') { %>
                var html = jadeRender({}, 'home.jade');<% } %><% if (jsTemplate === 'Handlebars') { %>
                var html = hbsRender({}, 'home.hbs');<% } %>
                res.render('index', {
                    env: process.env.NODE_ENV || 'development',
                    body: html || ''
                });
            },
            // if content-type being requested is JSON (ex. AJAX) then render our JSON data
            json: function(){
                res.send(JSON.stringify({}));
            }
        });<% } %><% if (structure === 'Static Site') { %>
        res.render('index', {})<% } %>
    }
};