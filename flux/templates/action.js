'use strict';

var Dispatcher = require('../dispatchers/default');
var <%= _.classify(name) %> = require('../constants/<%= _.slugify(name.toLowerCase()) %>');

var <%= _.classify(name) %>Actions = {
    sample: function(data) {
        Dispatcher.handleViewAction({
            actionType: <%= _.classify(name) %>.<%= name.toUpperCase() %>_CONSTANT,
            data: data
        });
    }
};

module.exports = <%= _.classify(name) %>Actions;
