'use strict';

var Dispatcher = require('../../common/core/dispatcher');
var pageConstants = require('./page.constant');
var pageDefaults = require('../../common/constants/default').page;
var assign = require('object-assign');

module.exports = {

  set: function(page) {
    Dispatcher.handleViewAction({
      actionType: pageConstants.SET_CURRENT_PAGE,
      page: assign({}, pageDefaults, page)
    });
  }

};
