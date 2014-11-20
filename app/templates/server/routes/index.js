/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');
var path = require('path');
var fs = require('fs');

var routes = function (app) {

    // Dynamically load all routes
    fs.readdirSync(__dirname).forEach(function(file) {
        // Dont load this index.js file
        if (!/index/.test(file)) {
            var route = path.join(__dirname, file);
            require(route)(app);
        }
    });<% if (!singlePageApplication) { %>

    // Home
    app.get('/', indexController.index);<% } else { %>

    // 404 page for any undefined route
    app.get('/:url(user|auth|settings|bower_components|images|scripts|styles)/*', function(req, res){
        res.format({
            html: function() {
                res.render('errors/404');
            },
            json: function() {
                res.status(404).json({ errors: [{msg: 'Not found'}] });
            }
        });
    });

    // Allow single page application to handle routing
    // Place all routes above this one
    app.get('/*', indexController.index);<% } %>

};

module.exports = routes;
