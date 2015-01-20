'use strict';

var Dispatcher = require('../dispatchers/default');
var routesConstants = require('../constants/routes');

module.exports = {

  setRoute: function(route) {

    Dispatcher.handleViewAction({
      actionType: routesConstants.SET_CURRENT_ROUTE,
      route: route
    });

  }

};
