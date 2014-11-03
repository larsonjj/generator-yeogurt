/**
 * Main Controller
 */

'use strict';<% if (singlePageApplication && useServerTemplates) { %><% if (jsFramework === 'react') { %>
var reactRender = require('../modules/react-render');<% } %><% } %>

var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');<% if (dbOption === 'mongodb') { %>
var User = require('mongoose').model('user');<% } else if (dbOption === 'mysql') { %>
var db = require('../config/database');
var User = db.user;<% } %>
var secrets = require('../config/secrets');
var auth = require('../auth');

/**
 * GET /user:id
 * Profile page.
 */

var show = function(req, res) {
    res.render('account/profile', {
        title: 'Account Management'
    });
};

/**
 * POST /user
 * Create a new local account.
 * @param email
 * @param password
 */

var create = function(req, res, next) {
    req.assert('username', 'Username cannot be blank and must not contain symbols').notEmpty().isAlphanumeric();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 6 characters long').len(6);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/signup');
        }
        else {
            res.json({
                errors: errors
            });
        }
    }

    var user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    User.find({
        where: {
            username: req.body.username
        }
    }).success(function(existingUser) {
        if (existingUser) {
            if (!req.xhr) {
                req.flash('errors', {
                    msg: 'Account with that username already exists.'
                });
                return res.redirect('/signup');
            }
            else {
                res.json({
                    errors: [{
                        param: 'email',
                        msg: 'Account with that username already exists.'
                    }]
                });
            }
        }
        User.create(user).success(function(user) {
            if (!req.xhr) {
                req.logIn(user, function(err) {
                    if (err) {
                        return next(err);
                    }
                    req.flash('success', {
                        msg: 'Account created successfully.'
                    });
                    res.redirect('/');
                });
            }
            else {
                var token = auth.signToken(user.username, user.role);
                res.json({
                    token: token,
                    success: [{
                        msg: 'Account created successfully.'
                    }]
                });
            }
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } else { %>

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/signup');
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
            req.flash('errors', {
                msg: 'Account with that email address already exists.'
            });
            return res.redirect('/signup');
        }
        User.create(user).success(function(user) {
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                req.flash('success', {
                    msg: 'Account created successfully.'
                });
                res.redirect('/');
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
    });<% } %>
};

/**
 * PUT /user:id/profile
 * Update profile information.
 */

var updateProfile = function(req, res, next) {<% if (useJwt) { %>
    User.find({
        where: {
            username: req.user.username
        }
    }).success(function(user) {
        user.email = req.body.email || '';
        user.name = req.body.name || '';
        user.gender = req.body.gender || '';
        user.location = req.body.location || '';
        user.website = req.body.website || '';

        user.save().success(function() {
            if (!req.xhr) {
                req.flash('success', {
                    msg: 'Profile information updated.'
                });
                res.redirect('/user/' + user.username);
            }
            else {
                res.json({
                    success: [{
                        msg: 'Profile information updated.'
                    }]
                });
            }

        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } else { %>
    User.find({
        where: {
            username: req.user.username
        }
    }).success(function(user) {
        user.email = req.body.email || '';
        user.name = req.body.name || '';
        user.gender = req.body.gender || '';
        user.location = req.body.location || '';
        user.website = req.body.website || '';

        user.save().success(function() {
            req.flash('success', {
                msg: 'Profile information updated.'
            });
            res.redirect('/user/' + user.username);
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } %>
};

/**
 * PUT /user:id/password
 * Update current password.
 * @param password
 */

var updatePassword = function(req, res, next) {
    req.assert('password', 'Password must be at least 6 characters long').len(6);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/user/' + req.user.username);
        }
        else {
            res.json({
                errors: errors
            });
        }
    }

    User.find({
        where: {
            username: req.user.username
        }
    }).success(function(user) {
        user.password = req.body.password;

        user.save().success(function() {
            if (!req.xhr) {
                req.flash('success', {
                    msg: 'Password has been changed.'
                });
                res.redirect('/user/' + user.username);
            }
            else {
                res.json({
                    success: [{
                        msg: 'Password has been changed.'
                    }]
                });
            }
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } else { %>

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/user/' + req.user.username);
    }

    User.find({
        where: {
            username: req.user.username
        }
    }).success(function(user) {
        user.password = req.body.password;

        user.save().success(function() {
            req.flash('success', {
                msg: 'Password has been changed.'
            });
            res.redirect('/user/' + req.user.username);
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } %>
};

/**
 * DELETE /user/:id
 * Delete user account.
 */

var destroy = function(req, res, next) {<% if (useJwt) { %>
    User.destroy({
        username: req.user.username
    }).success(function() {
        if (!req.xhr) {
            req.logout();
            req.flash('info', {
                msg: 'Your account has been deleted.'
            });
            res.redirect('/');
        }
        else {
            res.json({
                info: [{
                    msg: 'Your account has been deleted.'
                }]
            });
        }
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } else { %>
    User.destroy({
        username: req.user.username
    }).success(function() {
        req.logout();
        req.flash('info', {
            msg: 'Your account has been deleted.'
        });
        res.redirect('/');
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });<% } %>
};

module.exports = {
    show: show,
    create: create,
    updateProfile: updateProfile,
    updatePassword: updatePassword,
    destroy: destroy
};
