// Index Routes

'use strict';

var indexController = require('../controllers/index');

var routes = function(app) {

  // Home
  app.get('/', indexController.index);

};

module.exports = routes;
