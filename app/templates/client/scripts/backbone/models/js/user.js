/**
*   User Model
*   Access this model through the App.account object
*/

'use strict';

var App = App || {};
App.Models = App.Models || {};

App.Models.User = Backbone.Model.extend({<% if (dbOption === 'mongodb') { %>

    idAttribute: '_id',<% } else if (dbOption === 'sql') { %>
    idAttribute: 'id',<% } %>

    url: '/user',

    initialize: function() {
    },

    defaults: {
        loggedIn: false,

        email: '',
        role: 'user',
        password: '',

        // Profile info
        firstName: '',
        lastName: '',
        picture: ''

    },

    /*
     * Check to see if current user is authenticated
     */
    isAuthenticated: function(callback, args) {
        var self = this;
        this.fetch({
            success: function(model, res) {
                if (!res.error && res.user) {
                    var userData = res.user;
                    userData.loggedIn = true;

                    self.set(userData);

                    if (callback && 'success' in callback) {
                        callback.success(res);
                    }
                } else {
                    self.set({
                        loggedIn: false
                    });
                    if (callback && 'error' in callback) {
                        callback.error(res);
                    }
                }
            },
            error: function(model, res) {
                self.set({
                    loggedIn: false
                });
                if (callback && 'error' in callback) {
                    callback.error(res);
                }
            }
        }).complete(function() {
            if (callback && 'complete' in callback) {
                callback.complete();
            }
        });
    },

    /*
     * Make a POST request to the auth endpoint
     * This takes care of the JSON Web Token header for security, as well as
     * updating the user and Auth after receiving a response from the server
     */
    postAuth: function(data, callback) {
        var self = this;
        var postData = _.omit(data, 'url');
        $.ajax({
            url: data.url,
            dataType: 'json',
            data: postData.formData,
            type: 'post',
            success: function(res) {

                if (!res.error) {
                    // Store token in cookie that expires in a week
                    self.setToken(res.token, 7);
                    var userData = res.user;
                    userData.loggedIn = true;

                    self.set(userData);

                    if (callback && 'success' in callback) {
                        callback.success(res);
                    }

                } else {
                    if (callback && 'error' in callback) {
                        callback.error(res);
                    }
                }
            },
            error: function(res) {
                if (callback && 'error' in callback) {
                    callback.error(res);
                }
            }
        }).complete(function(res) {
            App.messages.showMessages(res.responseJSON);
            if (callback && 'complete' in callback) {
                callback.complete(res);
            }
        });
    },

    postForm: function($form, callback) {
        var postData = $form.serialize();
        var postUrl = $form.attr('action') || window.location.pathname;
        $.ajax({
            url: postUrl,
            dataType: 'json',
            data: postData,
            type: 'post',
            success: function(res) {

                if (!res.error) {
                    if (callback && 'success' in callback) {
                        callback.success(res);
                    }
                } else {
                    if (callback && 'error' in callback) {
                        callback.error(res);
                    }
                }
            },
            error: function(res) {
                if (callback && 'error' in callback) {
                    callback.error(res);
                }
            }
        }).complete(function(res) {
            App.messages.showMessages(res.responseJSON);
            if (callback && 'complete' in callback) {
                callback.complete(res);
            }
        });
    },

    getToken: function () {
        return $.cookie('token');
    },

    setToken: function (token, duration) {
        return $.cookie('token', token, {expires: duration});
    },


    login: function(data, callback) {
        this.postAuth(_.extend(data, {
            url: '/login'
        }), callback);
    },

    logout: function(data, callback) {
        // Remove any auth cookies
        $.removeCookie('token');

        this.set({
            loggedIn: false
        });

        // Reset model data
        this.clear();

        // Redirect to root
        Backbone.history.navigate('/', true);
    },

    signup: function(data, callback) {
        this.postAuth(_.extend(data, {
            url: '/user'
        }), callback);
    },

    forgot: function($form, callback) {
        this.postForm($form, callback);
    },

    reset: function($form, callback) {
        this.postForm($form, callback);
    },

    updateInfo: function($form, callback) {
        this.postForm($form, callback);
    },

    updatePassword: function($form, callback) {
        this.postForm($form, callback);
    }

});
