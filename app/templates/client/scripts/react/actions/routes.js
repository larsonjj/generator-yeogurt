'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');<% if (useAuth) { %>
var messagesActions = require('./messages');<% } %>

module.exports = {

    /**
     * Set the current route.
     * @param {string} route Supply a route value.
     */
    setRoute: function(route) {<% if (useAuth) { %>
        // Clear out any existing messages
        messagesActions.setMessages({});<% } %>

        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_CURRENT_ROUTE,
            route: route
        });
    }

};
