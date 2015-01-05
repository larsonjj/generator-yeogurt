'use strict';

var ActionTypes = {

    // Route action types
    SET_CURRENT_ROUTE: 'SET_CURRENT_ROUTE',

    // Page action types
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'<% if (useAuth) { %>,

    // User action types
    SET_CURRENT_USER: 'SET_CURRENT_USER',

    // Global message types
    SET_MESSAGES: 'SET_MESSAGES'<% } %>

};

module.exports = ActionTypes;
