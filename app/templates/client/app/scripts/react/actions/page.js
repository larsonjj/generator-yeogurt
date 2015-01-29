'use strict';

var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;
var assign = require('object-assign');

module.exports = {

  set: function(page) {
    Dispatcher.handleViewAction({
      actionType: pageConstants.SET_CURRENT_PAGE,
      page: assign({}, pageDefaults, page)
    });
  }

};
