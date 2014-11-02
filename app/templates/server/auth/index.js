'use strict';

var passport = require('passport');
var secrets = require('../config/secrets');<% if (useJwt) { %>
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');<% if (dbOption === 'mongodb') { %>
var User = require('mongoose').model('user');<% } else if (dbOption === 'mysql') { %>
var db = require('../config/database');
var User = db.user;<% } %><% } %>
var validateJwt = expressJwt({ secret: secrets.sessionSecret });<% if (authTypes.length > 0) { %>
var router = express.Router();<% } %><% if (authTypes.indexOf('local') > -1) { %>
var localStrategy = require('./strategies/local/strategy');<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
var facebookStrategy = require('./strategies/facebook/strategy');<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
var twitterStrategy = require('./strategies/twitter/strategy');<% } %>

<% if (authTypes.indexOf('local') > -1) { %>

// Setup Passport strategies
localStrategy(User);<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
facebookStrategy(User);<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
twitterStrategy(User);<% } %><% if (authTypes.indexOf('local') > -1) { %>

// Setup Authentication Routes
router.use('/local', require('./strategies/local'));<% } %><% if (authTypes.indexOf('facebook') > -1) { %>
router.use('/facebook', require('./strategies/facebook'));<% } %><% if (authTypes.indexOf('twitter') > -1) { %>
router.use('/twitter', require('./strategies/twitter'));<% } %><% if (authTypes.length > 0) { %>
router.use('/unlink:provider', require('./auth.controller').unlinkOAuth);<% } %>

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
    });
};

module.exports = {
    init: init,
    router: router
};
