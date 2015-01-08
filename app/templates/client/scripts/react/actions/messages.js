'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var messagesDefaults = require('../constants/defaults').messages;
var assign = require('object-assign');

module.exports = {

    /**
     * Set the current global messages.
     * @param {object} messages Supply an object containing message information.
     */
    setMessages: function(messages) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_MESSAGES,
            messages: assign({}, messagesDefaults, messages)
        });
    }

};
