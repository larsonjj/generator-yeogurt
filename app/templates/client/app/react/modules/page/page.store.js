'use strict';

var Store = require('../../lib/core/store');
var Dispatcher = require('../../lib/core/dispatcher');
var pageConstants = require('./page.constant');
var pageDefaults = require('../../lib/constants/default').page;

var _page;

var pageStore = new Store({

  // Gets metadata associated with the current page.
  get: function() {
    return _page || pageDefaults;
  }

});

pageStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === pageConstants.SET_CURRENT_PAGE) {
    _page = action.page;

    pageStore.emitChange();
  }

});

module.exports = pageStore;
