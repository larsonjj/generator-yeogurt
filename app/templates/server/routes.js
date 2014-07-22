/**
 * Server Routes
 */

'use strict';

// Load controller.
var mainController = require('./controllers/main');

var routes = function (app) {
    app.get('/', mainController.index);
};

module.exports = routes;