/**
 * Main Controller
 */

'use strict';<% if (singlePageApplication && useServerTemplates) { %>
<% if (jsFramework === 'react') { %>
var reactRender = require('../modules/react-render');<% } %><% } %>

var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('mongoose').model('user');
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
 * @param username
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

    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({
        username: req.body.username
    }, function(err, existingUser) {
        if (err) {
            if (!req.xhr) {
                req.flash('errors', {
                    msg: 'Error trying to find user'
                });
                return res.redirect('/signup');
            }
            else {
                res.json({
                    errors: [{
                        param: 'email',
                        msg: 'Error trying to find user'
                    }]
                });
            }
        }
        if (existingUser) {
            if (!req.xhr) {
                req.flash('errors', {
                    msg: 'Account with that email address already exists.'
                });
                return res.redirect('/signup');
            }
            else {
                res.json({
                    errors: [{
                        param: 'email',
                        msg: 'Account with that email address already exists.'
                    }]
                });
            }
        }
        user.save(function(err) {
            if (err) {
                return next(err);
            }
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
        });
    });<% } else { %>
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/signup');
    }

    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({
        username: req.body.username
    }, function(err, existingUser) {
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
        user.save(function(err) {
            if (err) {
                return next(err);
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                req.flash('success', {
                    msg: 'Account created successfully.'
                });
                res.redirect('/');
            });
        });
    });<% } %>
};

/**
 * PUT /user:id/profile
 * Update profile information.
 */

var updateProfile = function(req, res, next) {<% if (useJwt) { %>
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            return next(err);
        }

        user.email = req.body.email || '';
        user.name = req.body.name || '';
        user.gender = req.body.gender || '';
        user.location = req.body.location || '';
        user.website = req.body.website || '';

        user.save(function(err) {
            if (err) {
                return next(err);
            }
            if (!req.xhr) {
                req.flash('success', {
                    msg: 'Profile information updated.'
                });
                res.redirect('/user/' + req.user.username);
            }
            else {
                res.json({
                    success: [{
                        msg: 'Profile information updated.'
                    }]
                });
            }
        });
    });<% } else { %>
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            return next(err);
        }
        user.email = req.body.email || '';
        user.name = req.body.name || '';
        user.gender = req.body.gender || '';
        user.location = req.body.location || '';
        user.website = req.body.website || '';

        user.save(function(err) {
            if (err) {
                return next(err);
            }
            req.flash('success', {
                msg: 'Profile information updated.'
            });
            res.redirect('/user/' + req.user.username);
        });
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

    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            return next(err);
        }

        user.password = req.body.password;

        user.save(function(err) {
            if (err) {
                return next(err);
            }
            if (!req.xhr) {
                req.flash('success', {
                    msg: 'Password has been changed.'
                });
                res.redirect('/user/' + req.user.username);
            }
            else {
                res.json({
                    success: [{
                        msg: 'Password has been changed.'
                    }]
                });
            }
        });
    });<% } else { %>
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/user/' + req.user.username);
    }

    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) {
            return next(err);
        }

        user.password = req.body.password;

        user.save(function(err) {
            if (err) {
                return next(err);
            }
            req.flash('success', {
                msg: 'Password has been changed.'
            });
            res.redirect('/user/' + req.user.username);
        });
    });<% } %>
};

/**
 * DELETE /user:id
 * Delete user account.
 */

var destroy = function(req, res, next) {<% if (useJwt) { %>
    User.remove({
        id: req.user.username
    }, function(err) {
        if (err) {
            return next(err);
        }
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
    });<% } else { %>
    User.remove({
        id: req.user.username
    }, function(err) {
        if (err) {
            return next(err);
        }
        req.logout();
        req.flash('info', {
            msg: 'Your account has been deleted.'
        });
        res.redirect('/');
    });<% } %>
};

module.exports = {
    show: show,
    create: create,
    updateProfile: updateProfile,
    updatePassword: updatePassword,
    destroy: destroy
};
