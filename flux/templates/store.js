/**
*   <%= _.classify(name) %>Store Action Description
*/

'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var <%= _.classify(name) %>Constants = require('../constants/<%= _.slugify(name.toLowerCase()) %>');

var _data;

var <%= _.classify(name) %>Store = new Store({

  get: function() {
    return _data;
  }

});

<%= _.classify(name) %>Store.dispatcherToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === <%= _.classify(name) %>Constants.<%= name.toUpperCase() %>_CONSTANT) {
    _data = action.data;

    <%= _.classify(name) %>Store.emitChange();
  }

});

module.exports = <%= _.classify(name) %>Store;
