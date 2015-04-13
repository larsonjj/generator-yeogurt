'use strict';

var Dispatcher = require('<%= rootDir %>/src/app/main.dispatcher');
var <%= _.classify(name) %>Constants = require('./<%= _.slugify(name.toLowerCase()) %>.constants');

var <%= _.classify(name) %>Actions = {
  sample: function(data) {
    Dispatcher.handleViewAction({
      actionType: <%= _.classify(name) %>Constants.<%= name.toUpperCase() %>_CONSTANT,
      data: data
    });
  }
};

module.exports = <%= _.classify(name) %>Actions;
