/**
 * Server Routes
 */

'use strict';

// Load controller.
var mainController = require('./controllers/main');<% if (useAuth) { %>
var userController = require('./controllers/user');
var passport = require('passport');
var authConf = require('./auth');<% } %>

var routes = function (app) {<% if (useAuth) { %>
    // Login
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);

    // Logout
    app.get('/logout', userController.logout);

    // Forgot Password
    app.get('/forgot', userController.getForgot);
    app.post('/forgot', userController.postForgot);

    // Reset Password
    app.get('/reset/:token', userController.getReset);
    app.post('/reset/:token', userController.postReset);

    // Sign up for Account
    app.get('/signup', userController.getSignup);
    app.post('/signup', userController.postSignup);

    // User Account
    app.get('/account', authConf.isAuthenticated, userController.getAccount);
    app.post('/account/profile', authConf.isAuthenticated, userController.postUpdateProfile);
    app.post('/account/password', authConf.isAuthenticated, userController.postUpdatePassword);
    app.post('/account/delete', authConf.isAuthenticated, userController.postDeleteAccount);<% if (authTypes.indexOf('facebook') > -1) { %>

    // Facebook routes
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), userController.getOauthLink);
    <% } %><% if (authTypes.indexOf('twitter') > -1) { %>

    // Twitter routes
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), userController.getOauthLink);
    <% } %><% if (authTypes.indexOf(['facebook', 'twitter']) > -1) { %>
    // Unlink OAuth Provider
    app.get('/account/unlink/:provider', authConf.isAuthenticated, userController.getOauthUnlink);<% } %><% } %><% if (!singlePageApplication || useServerTemplates) { %>
    app.get('/', mainController.index);<% } else { %>
    // Catch All: Matches all routes to let HTML5 pushState work
    // Place all routes above this one
    app.get('/*', mainController.index);<% } %>
};

module.exports = routes;
