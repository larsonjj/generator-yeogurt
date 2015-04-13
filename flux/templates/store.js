/**
*   <%= _.classify(name) %>Store Action Description
*/

'use strict';

var Dispatcher = require('<%= rootDir %>/src/app/main.dispatcher');
var <%= _.classify(name) %>Store = require('./<%= _.slugify(name.toLowerCase()) %>.store');
var <%= _.classify(name) %>Constants = require('./<%= _.slugify(name.toLowerCase()) %>.constants');

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
