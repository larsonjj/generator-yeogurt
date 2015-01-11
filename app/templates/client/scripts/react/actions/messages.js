'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var messagesDefaults = require('../constants/defaults').messages;
var assign = require('object-assign');

module.exports = {

    setMessages: function(messages) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_MESSAGES,
            messages: assign({}, messagesDefaults, messages)
        });
    }

};
