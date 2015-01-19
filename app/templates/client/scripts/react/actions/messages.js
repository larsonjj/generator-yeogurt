'use strict';

var Dispatcher = require('../dispatchers/default');
var messagesConstants = require('../constants/messages');
var messagesDefaults = require('../constants/defaults').messages;
var assign = require('object-assign');

module.exports = {

  setMessages: function(messages) {
    Dispatcher.handleViewAction({
      actionType: messagesConstants.SET_MESSAGES,
      messages: assign({}, messagesDefaults, messages)
    });
  }

};
