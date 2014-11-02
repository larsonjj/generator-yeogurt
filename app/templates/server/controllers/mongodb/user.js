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
var authConf = require('../auth');

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
 * PUT /user:id/profile
 * Update profile information.
 */

var updateProfile = function(req, res, next) {<% if (useJwt) { %>
    User.findById(req.user.id, function(err, user) {
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
                res.redirect('/account');
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
    User.findById(req.user.id, function(err, user) {
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
            res.redirect('/account');
        });
    });<% } %>
};

/**
 * PUT /user:id/password
 * Update current password.
 * @param password
 */

var updatePassword = function(req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();<% if (useJwt) { %>
    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/account');
        }
        else {
            res.json({
                errors: errors
            });
        }
    }

    User.findById(req.user.id, function(err, user) {
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
                res.redirect('/account');
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
        return res.redirect('/account');
    }

    User.findById(req.user.id, function(err, user) {
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
            res.redirect('/account');
        });
    });<% } %>
};

/**
 * DELETE /user:id
 * Delete user account.
 */

var destroy = function(req, res, next) {<% if (useJwt) { %>
    User.remove({
        id: req.user.id
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
        id: req.user.id
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
    postUpdateProfile: postUpdateProfile,
    postUpdatePassword: postUpdatePassword,
    destroy: destroy
};
