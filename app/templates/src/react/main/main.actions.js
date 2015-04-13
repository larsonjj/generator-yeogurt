'use strict';

var Dispatcher = require('./main.dispatcher');
var mainConstants = require('./main.constants');

var actions = {

  setPage: function(page) {
    Dispatcher.handleViewAction({
      actionType: mainConstants.SET_CURRENT_PAGE,
      page: page
    });
  },

  setRoute: function(route) {
    Dispatcher.handleViewAction({
      actionType: mainConstants.SET_CURRENT_ROUTE,
      // Change to specified route, or default to root route
      route: route || '/'
    });
  }

};

module.exports = actions;
