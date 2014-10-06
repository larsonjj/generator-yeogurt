'use strict';

var passport = require('passport');<% if (authTypes.indexOf('local') > -1) { %>
var localStrategy = require('./strategies/local');<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
var facebookStrategy = require('./strategies/facebook');<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
var twitterStrategy = require('./strategies/twitter');<% } %>

var auth = function(db) {
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

module.exports = auth;
