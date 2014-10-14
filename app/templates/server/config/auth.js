'use strict';

var _ = require('lodash');<% if (authTypes.indexOf('local') > -1) { %>
var localStrategy = require('./strategies/local');<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
var facebookStrategy = require('./strategies/facebook');<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
var twitterStrategy = require('./strategies/twitter');<% } %>

var auth = function(db, passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        db.user.findById(id, function(err, user) {
            done(err, user);
        });
    });<% if (authTypes.indexOf('local') > -1) { %>

    localStrategy(passport, db.user);<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
    facebookStrategy(passport, db.user);<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
    twitterStrategy(passport, db.user);<% } %>
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

    if (_.find(req.user.tokens, {
        kind: provider
    })) {
        next();
    } else {
        res.redirect('/auth/' + provider);
    }
};

module.exports = {
    auth: auth,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized
};
