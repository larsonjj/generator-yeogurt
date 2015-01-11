'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var pageDefaults = require('../constants/defaults').page;
var assign = require('object-assign');

module.exports = {

    set: function(page) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_CURRENT_PAGE,
            page: assign({}, pageDefaults, page)
        });
    }

};
