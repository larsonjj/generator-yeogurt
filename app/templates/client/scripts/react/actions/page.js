'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var pageDefaults = require('../constants/defaults').page;
var assign = require('object-assign');

module.exports = {

    /**
     * Set metadata for the current page (title, description, keywords etc.).
     * @param {object} The page object.
     */
    set: function(page) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_CURRENT_PAGE,
            page: assign({}, pageDefaults, page)
        });
    }

};
