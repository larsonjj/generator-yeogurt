'use strict';

var _ = require('lodash');<% if (authTypes.indexOf('local') > -1) { %>
var localStrategy = require('./strategies/local');<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
var facebookStrategy = require('./strategies/facebook');<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
var twitterStrategy = require('./strategies/twitter');<% } %>

var auth = function(User, passport) {
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

    localStrategy(passport, User);<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
    facebookStrategy(passport, User);<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
    twitterStrategy(passport, User);<% } %>
};

// Login Required middleware.

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

// Authorization Required middleware.

var isAuthorized = function(req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];

    if (req.user[provider + 'Token']) {
        next();
    }
    else {
        res.redirect('/auth/' + provider);
    }
};

module.exports = {
    auth: auth,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized
};
