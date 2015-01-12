'use strict';

angular.module('<%= _.classify(projectName) %>')
    .factory('User', function User($location, $rootScope, $http, Messages) {

        // Store user info
        var currentUser = {};

        return {

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

            isAuthenticated: function(callback) {
                var self = this;
                $http.get('/user')
                .success(function(res) {
                    var userData = res.user;
                    userData.loggedIn = true;
                    currentUser = userData;
                })
                .error(function() {
                    currentUser = self.defaults;
                });
            },

            postForm: function($form, callback) {
                var self = this;
                var postData = $form.serialize();
                var postUrl = $form.attr('action') || window.location.pathname;
                var options = callback.options || {};

                $http.post(postUrl, postData)
                .success(function(res) {
                    if (!res.error) {
                        // If user needs to be authenticated
                        if (options.setToken) {
                            // Store token in cookie that expires in a week
                            self.setToken(res.token, 7);
                        }
                        // If user needs to be updated
                        if (options.updateUser) {
                            var userData = res.user;
                            userData.loggedIn = true;

                            self.currentUser = userData;
                        }
                        if (options.successUrl) {
                            $location.path(options.successUrl);
                        }
                    } else {
                        if (options.errorUrl) {
                            $location.path(options.errorUrl);
                        }
                    }
                })
                .error(function() {
                    if (options.errorUrl) {
                        $location.path(options.errorUrl);
                    }
                })
                .always(function(res) {
                    Messages.setMessages(res.responseJSON);
                });
            },

            login: function(form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/',
                    errorUrl: '/login',
                    setToken: true,
                    updateUser: true
                };
                this.postForm(form, cb);
            },

            logout: function() {
                // Remove token
                $.removeCookie('token');

                // Reset user to defaults
                this.setUser(this.defaults);

                // Redirect to homepage
                $location.setRoute('/');
            },

            getUser: function() {
                return currentUser;
            },

            getToken: function() {
                return $.cookie('token');
            },

            setToken: function (token, duration) {
                return $.cookie('token', token, {expires: duration});
            },

            signup: function($form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/',
                    errorUrl: '/signup',
                    setToken: true,
                    updateUser: true
                };
                this.postForm($form, cb);
            },

            forgot: function($form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/',
                    errorUrl: '/forgot'
                };
                this.postForm($form, cb);
            },

            reset: function($form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/',
                    errorUrl: window.location.pathname
                };
                this.postForm($form, cb);
            },

            updateSettings: function($form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/settings',
                    errorUrl: '/settings',
                    updateUser: true
                };
                this.postForm($form, cb);
            },

            updatePassword: function($form, callback) {
                var cb = callback || function() {};
                cb.options = {
                    successUrl: '/settings',
                    errorUrl: '/settings'
                };
                this.postForm($form, cb);
            }
        };
    });
