/**
*   <%= _.classify(name) %>Store Action Description
*/

'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var <%= _.classify(name) %>Constants = require('../constants/<%= _.slugify(name.toLowerCase()) %>');

/**
 * @typedef Messages
 * @type {object}
 */
var _data;

var <%= _.classify(name) %>Store = new Store({

    /**
     * Gets data associated with the current store.
     * @returns {data}
     */
    get: function() {
        return _data;
    }

});

<%= _.classify(name) %>Store.dispatcherToken = Dispatcher.register(function(payload) {

    var action = payload.action;

    // Replace 'true' with your desired constant
    if (action.actionType === <%= _.classify(name) %>Constants.SAMPLE_CONSTANT) {
        _data = action.data;

        <%= _.classify(name) %>Store.emitChange();
    }

});

module.exports = <%= _.classify(name) %>Store;
