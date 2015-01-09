'use strict';

var keyMirror = require('keymirror');

var ActionTypes = keyMirror({

    // Route action types
    SET_CURRENT_ROUTE: null,

    // Page action types
    SET_CURRENT_PAGE: null<% if (useAuth) { %>,

    // User action types
    SET_CURRENT_USER: null,

    // Global message types
    SET_MESSAGES: null<% } %>

});

module.exports = ActionTypes;
