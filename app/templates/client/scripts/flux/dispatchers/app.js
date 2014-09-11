/**
 * App Dispatcher
 * Extends Facebook's Flux Dispatcher
 */
'use strict';

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

// Adds functionality to Dispatcher to handle view actions
AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};


module.exports = AppDispatcher;