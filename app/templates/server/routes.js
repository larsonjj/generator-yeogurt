/**
 * Server Routes
 */

'use strict';

// Load controller.
var mainController = require('./controllers/main');
var passport = require('passport');
var passportConf = require('./config/auth');

var routes = function (app) {<% if (useAuth) { %>
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);
    app.get('/logout', userController.logout);
    app.get('/forgot', userController.getForgot);
    app.post('/forgot', userController.postForgot);
    app.get('/reset/:token', userController.getReset);
    app.post('/reset/:token', userController.postReset);
    app.get('/signup', userController.getSignup);
    app.post('/signup', userController.postSignup);
    app.get('/contact', contactController.getContact);
    app.post('/contact', contactController.postContact);
    app.get('/account', passportConf.isAuthenticated, userController.getAccount);
    app.post('/account/profile', passportConf.isAuthenticated, userController.postUpdateProfile);
    app.post('/account/password', passportConf.isAuthenticated, userController.postUpdatePassword);
    app.post('/account/delete', passportConf.isAuthenticated, userController.postDeleteAccount);
    app.get('/account/unlink/:provider', passportConf.isAuthenticated, userController.getOauthUnlink);<% if (authTypes.indexOf('facebook') > -1) { %>
    // Facebook routes
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
        res.redirect('/');
    });
    <% } %><% if (authTypes.indexOf('twitter') > -1) { %>
    // Twitter routes
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function(req, res) {
        res.redirect('/');
    });
    <% } %><% } %><% if (!singlePageApplication || useServerTemplates) { %>
    app.get('/', mainController.index);<% } else { %>
    // Catch All: Matches all routes to let HTML5 pushState work
    // Place all routes above this one
    app.get('*', mainController.index);<% } %>
};

module.exports = routes;