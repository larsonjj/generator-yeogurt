'use strict';

var Dispatcher = require('../../common/core/dispatcher');
var routeConstants = require('./route.constant');

module.exports = {

  setRoute: function(route) {
    Dispatcher.handleViewAction({
      actionType: routeConstants.SET_CURRENT_ROUTE,
      // Change to specified route, or default to root route
      route: route || routeConstants.routeRoot
    });
  }

};
