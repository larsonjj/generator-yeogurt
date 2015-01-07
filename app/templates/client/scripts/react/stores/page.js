'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var pageDefaults = require('../constants/defaults').page;

/**
 * @typedef Page
 * @type {object}
 * @property {string} title
 * @property {string} description
 * @property {string} keywords
 */
var _page;

var PageStore = new Store({

    /**
     * Gets metadata associated with the current page.
     * @returns {Page}
     */
    get: function() {
        return _page || pageDefaults;
    }

});

PageStore.dispatcherToken = Dispatcher.register(function(payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_CURRENT_PAGE) {
        _page = action.page;

        PageStore.emitChange();
    }

});

module.exports = PageStore;
