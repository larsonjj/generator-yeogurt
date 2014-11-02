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
var passport = require('passport');<% if (dbOption === 'mongodb') { %>
var User = require('mongoose').model('user');<% } else if (dbOption === 'mysql') { %>
var db = require('../config/database');
var User = db.user;<% } %>
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
    User.find({
        where: {
            id: req.user.id
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
                res.redirect('/account');
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
            id: req.user.id
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
            res.redirect('/account');
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

    User.find({
        where: {
            id: req.user.id
        }
    }).success(function(user) {
        user.password = req.body.password;

        user.save().success(function() {
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
        return res.redirect('/account');
    }

    User.find({
        where: {
            id: req.user.id
        }
    }).success(function(user) {
        user.password = req.body.password;

        user.save().success(function() {
            req.flash('success', {
                msg: 'Password has been changed.'
            });
            res.redirect('/account');
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
        id: req.user.id
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
        id: req.user.id
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
    updateProfile: updateProfile,
    updatePassword: updatePassword,
    destroy: destroy
};
