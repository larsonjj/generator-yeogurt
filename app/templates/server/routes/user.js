/**
 * User Routes
 */

'use strict';

var userController = require('../controllers/user');
var auth = require('../auth');

var routes = function (app) {

    app.post('/user', userController.create);
    app.get('/user/:id', auth.isAuthenticated, userController.show);
    app.put('/user/:id/profile', auth.isAuthenticated, userController.updateProfile);
    app.patch('/user/:id/profile', auth.isAuthenticated, userController.updateProfile);
    app.put('/user/:id/password', auth.isAuthenticated, userController.updatePassword);
    app.delete('/user/:id', auth.isAuthenticated, userController.destroy);

};

module.exports = routes;
