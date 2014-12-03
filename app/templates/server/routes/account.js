/**
 * Auth Routes
 */

'use strict';

var accountController = require('../controllers/account');
var auth = require('../auth');

var routes = function (app) {
    // Account
    app.get('/login', accountController.login);
    app.post('/login', accountController.postLogin);
    app.get('/logout', accountController.logout);
    app.get('/forgot', accountController.forgot);
    app.post('/forgot', accountController.postForgot);
    app.get('/reset/:token', accountController.reset);
    app.post('/reset/:token', accountController.postReset);
    app.get('/signup', accountController.signup);
    app.get('/settings', auth.isAuthenticated, accountController.settings);
};

module.exports = routes;
