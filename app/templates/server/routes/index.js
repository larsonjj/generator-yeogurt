/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');

var routes = function (app) {<% if (!singlePageApplication) { %>

    // Home
    app.get('/', indexController.index);

    // 404 Route (NEEDS to be last)
    app.get('/*', function(req, res){
        res.format({
            html: function() {
                res.render('errors/404');
            },
            json: function() {
                res.json({ error: 'Not found' });
            }
        });
    });<% } else { %>
    // 404 Routes for anything undefined
    app.get('/:url(user|auth|settings|bower_components|images|scripts|styles)/*', function(req, res){
        res.format({
            html: function() {
                res.render('errors/404');
            },
            json: function() {
                res.json({ error: 'Not found' });
            }
        });
    });

    // Catch All: Matches all routes to let HTML5 pushState work
    // Place all routes above this one
    app.get('/*', indexController.index);<% } %>

};

module.exports = routes;
