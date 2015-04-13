'use strict';

var Store = require('./lib/store');
var Dispatcher = require('./main.dispatcher');
var mainConstants = require('./main.constants');

var _page;

var mainStore = new Store({

  // Gets metadata associated with the current page.
  getPage: function() {
    return _page;
  }

});

mainStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === mainConstants.SET_CURRENT_PAGE) {
    _page = action.page;

    mainStore.emitChange();
  }

});

module.exports = mainStore;
