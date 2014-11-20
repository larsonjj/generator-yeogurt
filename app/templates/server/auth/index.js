'use strict';

var passport = require('passport');
var secrets = require('../config/secrets');<% if (singlePageApplication) { %>
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validateJwt = expressJwt({ secret: secrets.sessionSecret });<% if (dbOption === 'mongodb') { %>
var User = require('mongoose').model('user');<% } else if (dbOption === 'mysql') { %>
var db = require('../config/database');
var User = db.user;<% } %><% } %><% if (authTypes.indexOf('local') > -1) { %>
var localStrategy = require('./strategies/local');<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
var facebookStrategy = require('./strategies/facebook');<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
var twitterStrategy = require('./strategies/twitter');<% } %>

/**
 * Initialize passport serialization/deserialization<% if (authTypes.indexOf('local') > -1) { %>
 * and load up any additional strategies<% } %>
 */
var init = function(User) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {<% if (dbOption === 'mongodb') { %>
        User.findById(id, function(err, user) {
            done(err, user);
        });<% } else if (dbOption === 'mysql') { %>
        User.find({
            where: {
                id: id
            }
        }).success(function(user) {
            done(null, user);
        });<% } %>
    });<% if (authTypes.indexOf('local') > -1) { %>

    // Setup Passport strategies
    localStrategy(User);<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
    facebookStrategy(User);<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
    twitterStrategy(User);<% } %>
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
var signToken = function(username) {
    return jwt.sign({
        username: username
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
    }
    var token = signToken(req.user.username, req.user.role);
    res.cookie('token', JSON.stringify(token));
};<% } %>

module.exports = {
    init: init,
    isAuthenticated: isAuthenticated,
    hasRole: hasRole,<% if (singlePageApplication) { %>
    signToken: signToken,
    setTokenCookie: setTokenCookie<% } %>
};
