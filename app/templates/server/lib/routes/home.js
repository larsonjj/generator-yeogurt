// Homepage Router

'use strict';

// Load controller.
var homeController = require('../controllers/home');

module.exports = function (app) {
    app.get('/', homeController.index);
};