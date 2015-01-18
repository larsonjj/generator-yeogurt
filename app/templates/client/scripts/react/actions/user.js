'use strict';

var Dispatcher = require('../dispatchers/default');
var userConstants = require('../constants/user');
var messagesActions = require('./messages');
var routeActions = require('./routes');
var userDefaults = require('../constants/defaults').user;
var request = require('superagent');
var serialize = require('form-serialize');
var cookie = require('cookie');

module.exports = {

  setUser: function(user) {
    Dispatcher.handleViewAction({
      actionType: userConstants.SET_CURRENT_USER,
      user: user
    });
  },

  isAuthenticated: function(callback) {
    var self = this;
    var token = self.getToken();
    request
      .get('/user')
      .type('json')
      .set({
        'authorization': 'Bearer ' + token,
      })
      .end(function(res) {
        if (res.ok) {
          if (res.body && res.body.user) {
            var userData = res.body.user;
            userData.loggedIn = true;

            self.setUser(userData);
          }
          else {
            self.logout();
          }
          if (callback && callback.success) {
            callback.success(res);
          }
        }
        else {
          self.logout();
          if (callback && callback.error) {
            callback.error(res);
          }
        }

        if (callback && callback.complete) {
          callback.complete(res);
        }
      });
  },

  postForm: function(form, callback) {
    var self = this;
    var postData = serialize(form);
    var postUrl = form.getAttribute('action') || window.location.pathname;
    var token = self.getToken();
    var options = callback.options || {};

    request
      .post(postUrl)
      .type('form')
      .set({
        'authorization': 'Bearer ' + token,
        'X-Requested-With': 'XMLHttpRequest'
      })
      .send(postData)
      .end(function(res) {
        if (res.ok) {
          var userData;
          // If auth token needs to be stored
          if (options.setToken) {
            // Store token in cookie that expires in a week
            self.setToken(res.body.token, 7);
          }
          // If user needs to be updated
          if (options.updateUser) {
            userData = res.body.user;
            userData.loggedIn = true;

            self.setUser(userData);
          }
          // If user needs to be destroyed
          if (options.destroyUser) {
            // Log user out
            self.logout();
          }
          if (callback && callback.success) {
            callback.success(res);
          }
          if (options.successUrl) {
            routeActions.setRoute(options.successUrl);
          }
        }
        else {
          if (callback && callback.error) {
            callback.error(res);
          }
          if (options.errorUrl) {
            routeActions.setRoute(options.errorUrl);
          }
        }

        // Show global messages
        messagesActions.setMessages(res.body);
        if (callback && callback.complete) {
          callback.complete(res);
        }
      });
  },

  getToken: function() {
    var cookies = cookie.parse(document.cookie);

    return cookies.token;
  },

  setToken: function(token, duration) {
    var today = new Date();
    // Set expire date for cookie for some time into the future (days)
    var endDate = new Date(today.getTime() + (duration * 1000 * 60 * 60 * 24));
    document.cookie = cookie.serialize('token', token, {expires: endDate});
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
    this.setToken('', -1);

    // Reset user to defaults
    this.setUser(userDefaults);

    // Redirect to homepage
    routeActions.setRoute('/');
  },

  signup: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      successUrl: '/',
      errorUrl: '/signup',
      setToken: true,
      updateUser: true
    };
    this.postForm(form, cb);
  },

  forgot: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      successUrl: '/',
      errorUrl: '/forgot'
    };
    this.postForm(form, cb);
  },

  reset: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      successUrl: '/',
      errorUrl: window.location.pathname
    };
    this.postForm(form, cb);
  },

  updateSettings: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      successUrl: '/settings',
      errorUrl: '/settings',
      updateUser: true
    };
    this.postForm(form, cb);
  },

  updatePassword: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      successUrl: '/settings',
      errorUrl: '/settings'
    };
    this.postForm(form, cb);
  },

  destroy: function(form, callback) {
    var cb = callback || function() {};
    cb.options = {
      destroyUser: true
    };
    this.postForm(form, cb);
  }

};
