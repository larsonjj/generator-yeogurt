'use strict';

var passport = require('passport');
var secrets = require('../config/secrets');<% if (singlePageApplication) { %>
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validateJwt = expressJwt({ secret: secrets.sessionSecret });<% if (dbOption === 'mongodb') { %>
var User = require('mongoose').model('user');<% } else if (dbOption === 'sql') { %>
var db = require('../config/database');
var User = db.user;<% } %><% } %>
var localStrategy = require('./strategies/local');

/**
 * Initialize passport serialization/deserialization
 */
var init = function(User) {
  passport.serializeUser(function(user, done) {<% if (dbOption === 'mongodb') { %>
    done(null, user._id);<% } else if (dbOption === 'sql') { %>
    done(null, user.id);<% } %>
  });

  passport.deserializeUser(function(id, done) {<% if (dbOption === 'mongodb') { %>
    User.findById(id, function(err, user) {
      done(err, user);
    });<% } else if (dbOption === 'sql') { %>
    User.find(id).success(function(user) {
      done(null, user);
    }).error(function(err) {
      done(err);
    });<% } %>
  });

  // Setup Passport strategies
  localStrategy(User);
};

/**
 * Check to see if user is authenticated
 */
var isAuthenticated = function(req, res, next) {<% if (singlePageApplication) { %>
  // allow access_token to be passed through query parameter as well
  if (req.body && req.body.hasOwnProperty('access_token')) {
    req.headers.authorization = 'Bearer ' + req.body.access_token;
  }
  // Validate jwt token
  return validateJwt(req, res, next);<% } else { %>
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
  <% } %>
};

/**
 * Checks if the user role meets the minimum requirements of the route
 */
var hasRole = function(roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }

  function meetsRequirements(req, res, next) {
    if (secrets.userRoles.indexOf(req.user.role) >= secrets.userRoles.indexOf(roleRequired)) {
      next();
    } else {<% if (singlePageApplication) { %>
      res.send(403);<% } else { %>
      res.redirect('/login');<% } %>
    }
  }
  return meetsRequirements;
};<% if (singlePageApplication) { %>

/**
 * Returns a jwt token signed by the app secret
 */
var signToken = function(<% if (dbOption === 'mongodb') { %>_id<% } else if (dbOption === 'sql') { %>id<% } %>) {
  return jwt.sign({<% if (dbOption === 'mongodb') { %>
    _id: _id,<% } else if (dbOption === 'sql') { %>
    id: id,<% } %>
  }, secrets.sessionSecret, {
    expiresInMinutes: 60 * 24 // 24 hours
  });
};

/**
 * Set token cookie directly for oAuth strategies
 */
var setTokenCookie = function(req, res) {
  if (!req.user) {
    return res.status(404).json({
      message: 'Something went wrong, please try again.'
    });
  }<% if (dbOption === 'mongodb') { %>
  var token = signToken(req.user._id, req.user.role);<% } else if (dbOption === 'sql') { %>
  var token = signToken(req.user.id, req.user.role);<% } %>
  res.cookie('token', JSON.stringify(token));
};<% } %>

module.exports = {
  init: init,
  isAuthenticated: isAuthenticated,
  hasRole: hasRole,<% if (singlePageApplication) { %>
  signToken: signToken,
  setTokenCookie: setTokenCookie<% } %>
};
