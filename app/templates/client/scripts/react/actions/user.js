'use strict';

var Dispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/action-types');
var request = require('superagent');

module.exports = {

    /**
     * Set the current user.
     * @param {string} user Supply a user value.
     */
    setUser: function(user) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.SET_CURRENT_USER,
            user: user
        });
    },

    isAuthenticated: function(callback) {
        var self = this;
        var token = self.getToken();
        request.
            get('/user')
            .set({
                'authorization': 'Bearer ' + token,
                Accept: 'application/json'
            })
            .end(function(res) {
                if (res.ok) {
                    if (res.body && res.body.user) {
                        self.setUser(res.body.user);
                    }
                    else {
                        self.logout();
                    }
                    if (callback && 'success' in callback) {
                        callback.success(res);
                    }
                }
                else {
                    self.logout();
                    if (callback && 'error' in callback) {
                        callback.error(res);
                    }
                }

                if (callback && 'complete' in callback) {
                    callback.complete(res);
                }
            });
    },

    logout: function() {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.LOGOUT_CURRENT_USER,
        });
    },

    getToken: function() {

    }

};
