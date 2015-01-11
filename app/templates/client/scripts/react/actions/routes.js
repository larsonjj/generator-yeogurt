'use strict';

var Dispatcher = require('../dispatchers/default');
var routesConstants = require('../constants/routes');<% if (useAuth) { %>
var messagesActions = require('./messages');<% } %>

module.exports = {

    setRoute: function(route) {<% if (useAuth) { %>
        // Clear out any existing messages
        messagesActions.setMessages({});<% } %>

        Dispatcher.handleViewAction({
            actionType: routesConstants.SET_CURRENT_ROUTE,
            route: route
        });
    }

};
