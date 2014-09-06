/**
*   <%= _.classify(name) %>Store Action Description
*/

'use strict';

var AppDispatcher = require('../dispatchers/app');
var EventEmitter = require('events').EventEmitter;
var <%= _.classify(name) %>Constants = require('../constants/<%= _.slugify(name.toLowerCase()) %>');

// Default change event name
var CHANGE_EVENT = 'change';

// Where you will store your data
var _data = {};

/**
 * Update data in store
 * @param  {object} data
 */
function update(data) {
    _data = data;
}

var <%= _.classify(name) %>Store = EventEmitter.prototype;

/**
 * Get data.
 * @return {object}
 */
<%= _.classify(name) %>Store.getData = function() {
    return _data;
};

<%= _.classify(name) %>Store.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

/**
 * @param {function} callback
 */
<%= _.classify(name) %>Store.addChangeListener = function(callback) {
    this.on(CHANGE_EVENT, callback);
};

/**
 * @param {function} callback
 */
<%= _.classify(name) %>Store.removeChangeListener = function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
};

// Have dispatcher handle all updates
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch (action.actionType) {
        case <%=_.classify(name) %>Constants.SAMPLE_CONSTANT:
            text = action.text.trim();
            if (text !== '') {
                update(text);
                // Let application know, that a change has occured
                <%= _.classify(name) %>Store.emitChange();
            }
            break;
        default:
            return true;
    }


    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = <%= _.classify(name) %>Store;
