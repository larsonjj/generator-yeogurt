define(function(require) {
  'use strict';

  var messages = require('./messages');

  var User = Backbone.Model.extend({

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

    // Check to see if current user is authenticated
    isAuthenticated: function(callback) {
      var self = this;
      this.fetch({
        success: function(model, res) {
          if (!res.error && res.user) {
            var userData = res.user;
            userData.loggedIn = true;

            self.set(userData);

            if (callback && callback.success) {
              callback.success(res);
            }
          } else {
            self.set({
              loggedIn: false
            });
            if (callback && callback.error) {
              callback.error(res);
            }
          }
        },
        error: function(model, res) {
          self.set({
            loggedIn: false
          });
          if (callback && callback.error) {
            callback.error(res);
          }
        }
      }).complete(function() {
        if (callback && callback.complete) {
          callback.complete();
        }
      });
    },

    postForm: function($form, callback) {
      var self = this;
      var postData = $form.serialize();
      var postUrl = $form.attr('action') || window.location.pathname;
      var options = callback.options || {};

      $.ajax({
        url: postUrl,
        dataType: 'json',
        data: postData,
        type: 'post',
        success: function(res) {

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

              self.set(userData);
            }
            if (callback.success) {
              callback.success(res);
            }
            if (options.successUrl) {
              Backbone.history.navigate(options.successUrl, {trigger: true});
            }
          } else {
            if (callback.error) {
              callback.error(res);
            }
            if (options.errorUrl) {
              Backbone.history.navigate(options.errorUrl, {trigger: true});
            }
          }
        },
        error: function(res) {
          if (callback.error) {
            callback.error(res);
          }
          if (options.errorUrl) {
            Backbone.history.navigate(options.errorUrl, {trigger: true});
          }
        }
      }).complete(function(res) {
        messages.setMessages(res.responseJSON);
        if (callback.complete) {
          callback.complete(res);
        }
      });
    },

    getToken: function() {
      return $.cookie('token');
    },

    setToken: function(token, duration) {
      return $.cookie('token', token, {expires: duration});
    },

    login: function($form, callback) {
      var cb = callback || function() {};
      cb.options = {
        successUrl: '/',
        errorUrl: '/login',
        setToken: true,
        updateUser: true
      };
      this.postForm($form, cb);
    },

    logout: function() {
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

  });

  return new User();

});

