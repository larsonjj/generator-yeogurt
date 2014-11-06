/**
 * User Routes
 */

'use strict';

var userController = require('../controllers/user');
var auth = require('../auth');

var routes = function (app) {

    // User REST Endpoints
    app.post('/user', userController.create);
    app.get('/user/:username', auth.isAuthenticated, userController.show);
    app.put('/user/:username/profile', auth.isAuthenticated, userController.updateProfile);
    app.patch('/user/:username/profile', auth.isAuthenticated, userController.updateProfile);
    app.put('/user/:username/password', auth.isAuthenticated, userController.updatePassword);
    app.delete('/user/:username', auth.isAuthenticated, userController.destroy);

};

module.exports = routes;
