'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;

var _page;

var PageStore = new Store({

  // Gets metadata associated with the current page.
  get: function() {
    return _page || pageDefaults;
  }

});

PageStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === pageConstants.SET_CURRENT_PAGE) {
    _page = action.page;

    PageStore.emitChange();
  }

});

module.exports = PageStore;
