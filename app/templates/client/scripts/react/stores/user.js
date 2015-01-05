'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var userDefaults = require('../constants/defaults').user;

/**
 * @typedef User
 * @type {object}
 * @property {boolean} loggedIn
 * @property {string} firstName
 * @property {string} lastName
 */
var _user;

var UserStore = new Store({

    /**
     * Gets data associated with the current user.
     * @returns {user}
     */
    get: function() {
        return _user || userDefaults;
    }

});

UserStore.dispatcherToken = Dispatcher.register(function(payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_CURRENT_USER) {
        _user = action.user;
    }

    else if (action.actionType === ActionTypes.LOGOUT_CURRENT_USER) {
        _user = userDefaults;
    }

    // Emit change event by default
    UserStore.emitChange();

});

module.exports = UserStore;
