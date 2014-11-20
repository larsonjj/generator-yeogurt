/**
 * Auth Routes
 */

'use strict';

var passport = require('passport');
var accountController = require('../controllers/account');
var auth = require('../auth');

var routes = function (app) {
    // Account<% if (!singlePageApplication) { %>
    app.get('/login', accountController.login);<% } %>
    app.post('/login', accountController.postLogin);<% if (!singlePageApplication) { %>
    app.get('/logout', accountController.logout);
    app.get('/forgot', accountController.forgot);<% } %>
    app.post('/forgot', accountController.postForgot);<% if (!singlePageApplication) { %>
    app.get('/reset/:token', accountController.reset);<% } %>
    app.post('/reset/:token', accountController.postReset);<% if (!singlePageApplication) { %>
    app.get('/signup', accountController.signup);
    app.get('/social/signup', accountController.socialSignup);<% } %>
    app.post('/social/signup', accountController.postSocialSignup);<% if (!singlePageApplication) { %>
    app.get('/settings', auth.isAuthenticated, accountController.settings);<% } %><% if (authTypes.indexOf('facebook') > -1) { %>

    // Facebook
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email'],
        failureRedirect: '/login'
    }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login'
    }), accountController.linkOAuth);<% } %><% if (authTypes.indexOf('twitter') > -1) { %>

    // Twitter
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/login'
    }));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/login'
    }), accountController.linkOAuth);<% } %><% if (authTypes.length > 0) { %>

    // Unlink Social Account
    app.get('/auth/unlink/:provider', accountController.unlinkOAuth);<% } %>
};

module.exports = routes;
