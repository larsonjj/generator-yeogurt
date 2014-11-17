/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');

var routes = function (app) {<% if (!singlePageApplication) { %>

    // Home
    app.get('/', indexController.index);<% } else { %>
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

    // Catch All: Matches all routes
    // Place all routes above this one
    app.get('/*', indexController.index);<% } %>

};

module.exports = routes;
