/**
 * Server Routes
 */

'use strict';

var express = require('express');
// var auth = require('./auth');
var homeController = require('./controllers/home');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var router = express.Router();

var routes = function () {
    // Account
    router.get('/login', authController.login);
    router.get('/logout', authController.logout);
    router.get('/forgot', authController.forgot);
    router.post('/forgot', authController.postForgot);
    router.get('/reset/:token', authController.reset);
    router.post('/reset/:token', authController.postReset);
    router.get('/signup', authController.signup);

    // Users
    router.post('/user', authController.isAuthenticated, userController.create);
    router.get('/user/:id', authController.isAuthenticated, userController.show);
    router.put('/user/:id/profile', authController.isAuthenticated, userController.updateProfile);
    router.put('/user/:id/password', authController.isAuthenticated, userController.updatePassword);
    router.delete('/user/:id', authController.isAuthenticated, userController.destroy);<% if (authTypes.length > 0) { %>

    // Authentication
    router.use('/auth', require('./auth'));<% } %><% if (!singlePageApplication || useServerTemplates) { %>

    router.get('/', homeController.index);<% } else { %>
    // Catch All: Matches all routes to let HTML5 pushState work
    // Place all routes above this one
    router.get('/*', homeController.index);<% } %>
};

module.exports = routes;
