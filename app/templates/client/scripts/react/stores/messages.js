'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var messagesDefaults = require('../constants/defaults').messages;

/**
 * @typedef Messages
 * @type {object}
 */
var _messages;

var MessagesStore = new Store({

    /**
     * Gets data associated with the current messages.
     * @returns {messages}
     */
    get: function() {
        return _messages || messagesDefaults;
    }

});

MessagesStore.dispatcherToken = Dispatcher.register(function(payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_MESSAGES) {
        _messages = action.messages;

        MessagesStore.emitChange();
    }

});

module.exports = MessagesStore;
