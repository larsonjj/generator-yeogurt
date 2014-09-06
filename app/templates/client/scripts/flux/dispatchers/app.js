'use strict';

var Dispatcher = require('./dispatcher');
var AppDispatcher = new Dispatcher();

/**
 * Adds functionality to Dispatcher to handle view actions
 * @param  {object} action data passed from the view (React Component).
 */
AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};


module.exports = AppDispatcher;