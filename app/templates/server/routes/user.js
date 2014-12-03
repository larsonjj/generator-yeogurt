/**
 * User Routes
 */

'use strict';

var userController = require('../controllers/user');
var auth = require('../auth');

var routes = function (app) {

    // Create
    app.post('/user', userController.create);

    // Public user profile
    app.get('/user/:username', userController.show);<% if (singlePageApplication) { %>

    // Private User info
    app.get('/user/me', auth.isAuthenticated, userController.me);
    app.get('/user/session', auth.isAuthenticated, userController.sessionInfo);<% } %>

    // Update profile
    app.post('/user/:username/username', auth.isAuthenticated, userController.updateUsername);
    app.put('/user/:username/profile', auth.isAuthenticated, userController.updateProfile);
    app.patch('/user/:username/profile', auth.isAuthenticated, userController.updateProfile);
    app.put('/user/:username/password', auth.isAuthenticated, userController.updatePassword);

    // Delete
    app.delete('/user/:username', auth.isAuthenticated, auth.hasRole('admin'), userController.destroy);
    app.delete('/user', auth.isAuthenticated, userController.deleteAccount);

};

module.exports = routes;
