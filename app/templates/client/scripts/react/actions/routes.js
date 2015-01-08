'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var messagesActions = require('./messages');
var routeDefaults = require('../constants/defaults').route;
var assign = require('object-assign');

module.exports = {

    /**
     * Set the current route.
     * @param {string} route Supply a route value.
     */
    setRoute: function(route) {
        // Clear out any existing messages
        messagesActions.setMessages({});

        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_CURRENT_ROUTE,
            route: assign({}, routeDefaults, route)
        });
    }

};
