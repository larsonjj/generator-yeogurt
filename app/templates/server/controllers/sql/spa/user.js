/**
 * Main Controller
 */

'use strict';

var db = require('../config/database');
var User = db.user;
var auth = require('../auth');

/**
 * GET /user
 * Read user data.
 */
var readAccount = function(req, res, next) {
    User.find(req.user.id).success(function(user) {
        if (!user) {
            return res.status(400).json({
                errors: [{
                    msg: 'Failed to authenticate'
                }]
            });
        }
        res.status(200).json({
            user: user
        });
    }).error(function(err) {
        return next(err);
    });
};

/**
 * POST /user
 * Create a new local account.
 * @param email
 * @param password
 * @param confirmPassword
 */

var createAccount = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 6 characters long').len(6);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).json({
            errors: errors
        });
    }

    var user = {
        email: req.body.email,
        password: req.body.password
    };

    User.find({
        where: {
            email: req.body.email
        }
    }).success(function(existingUser) {
        if (existingUser) {
            res.status(409).json({
                errors: [{
                    param: 'email',
                    msg: 'Account with that email address already exists.'
                }]
            });
        }
        User.create(user).success(function(user) {
            // Send user and authentication token
            var token = auth.signToken(user.id, user.role);
            res.status(200).json({
                token: token,
                user: user,
                success: [{
                    msg: 'Account created successfully.'
                }]
            });
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });
};

/**
 * PUT /user
 * Update profile information.
 */

var updateProfile = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();

    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).json({
            errors: errors
        });
    }

    User.find(req.user.id).success(function(user) {
        user.email = req.body.email || '';
        user.firstName = req.body.firstName || '';
        user.lastName = req.body.lastName || '';

        user.save().success(function() {
            res.status(200).json({
                success: [{
                    msg: 'Profile information updated.'
                }],
                user: user
            });

        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });
};

/**
 * PUT /user/password
 * Update current password.
 * @param password
 * @param confirmPassword
 */

var updatePassword = function(req, res, next) {
    req.assert('password', 'Password must be at least 6 characters long').len(6);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).json({
            errors: errors
        });
    }

    User.find(req.user.id).success(function(user) {
        user.password = req.body.password;

        user.save().success(function() {
            res.status(200).json({
                success: [{
                    msg: 'Password has been changed.'
                }]
            });
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });
};

/**
 * DELETE /user
 * Delete current user account.
 */

var deleteAccount = function(req, res, next) {
    User.destroy(req.user.id).success(function() {
        res.status(200).json({
            info: [{
                msg: 'Your account has been deleted.'
            }]
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });
};

module.exports = {
    readAccount: readAccount,
    createAccount: createAccount,
    updateProfile: updateProfile,
    updatePassword: updatePassword,
    deleteAccount: deleteAccount
};
