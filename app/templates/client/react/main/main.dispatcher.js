'use strict';

var Dispatcher = require('flux').Dispatcher;
var mainConstants = require('./main.constants');

// ES6 object.assign polyfill
var assign = require('object-assign');

var defaultDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: mainConstants.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = defaultDispatcher;
