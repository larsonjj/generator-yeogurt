'use strict';

var Dispatcher = require('../dispatchers/default');
var routeConstants = require('../constants/routes');

module.exports = {

  setRoute: function(route) {
    Dispatcher.handleViewAction({
      actionType: routeConstants.SET_CURRENT_ROUTE,
      // Change to specified route, or default to root route
      route: route || routeConstants.routeRoot
    });
  }

};
