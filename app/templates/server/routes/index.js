/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');

var routes = function (app) {<% if (!singlePageApplication || useServerTemplates) { %>

    app.get('/', indexController.index);<% } else { %>
    // Catch All: Matches all routes to let HTML5 pushState work
    // Place all routes above this one
    app.get('/*', indexController.index);<% } %>

};

module.exports = routes;
