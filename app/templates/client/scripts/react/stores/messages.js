'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var messagesConstants = require('../constants/messages');
var messagesDefaults = require('../constants/defaults').messages;

var _messages;

var MessagesStore = new Store({

  // Gets data associated with the current messages.
  get: function() {
    return _messages || messagesDefaults;
  }

});

MessagesStore.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === messagesConstants.SET_MESSAGES) {
    _messages = action.messages;

    MessagesStore.emitChange();
  }

});

module.exports = MessagesStore;
