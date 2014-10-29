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
 * GET /login
 * Login page.
 */

var getLogin = function(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/login', {
        title: 'Login'
    });
};

/**
 * POST /login
 * Sign in using email and password.
 * @param email
 * @param password
 */

var postLogin = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/login');
        }
        else {
            return res.json(401, error);
        }
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            if (!req.xhr) {
                req.flash('errors', {
                    msg: info.message
                });
                return res.redirect('/login');
            }
            else {
                return res.json(404, {
                    message: 'Something went wrong, please try again.'
                });
            }
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            if (!req.xhr) {
                req.flash('success', {
                    msg: 'Success! You are logged in.'
                });
                res.redirect(req.session.returnTo || '/');
            }
            else {
                var token = authConf.signToken(user.id, user.role);
                res.json({
                    token: token
                });
            }
        });
    })(req, res, next);<% } else { %>
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/login');
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('errors', {
                msg: info.message
            });
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            req.flash('success', {
                msg: 'Success! You are logged in.'
            });
            res.redirect(req.session.returnTo || '/');
        });
    })(req, res, next);<% } %>
};

/**
 * GET /logout
 * Log out.
 */

var logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * GET /signup
 * Signup page.
 */

var getSignup = function(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/signup', {
        title: 'Create Account'
    });
};

/**
 * POST /signup
 * Create a new local account.
 * @param email
 * @param password
 */

var postSignup = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
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
        email: req.body.email,
        password: req.body.password
    };

    User.find({
        where: {
            email: req.body.email
        }
    }).success(function(existingUser) {
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
                var token = authConf.signToken(user.id, user.role);
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
 * GET /account
 * Profile page.
 */

var getAccount = function(req, res) {
    res.render('account/profile', {
        title: 'Account Management'
    });
};

/**
 * POST /account/profile
 * Update profile information.
 */

var postUpdateProfile = function(req, res, next) {<% if (useJwt) { %>
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
 * POST /account/password
 * Update current password.
 * @param password
 */

var postUpdatePassword = function(req, res, next) {
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
 * POST /account/delete
 * Delete user account.
 */

var postDeleteAccount = function(req, res, next) {<% if (useJwt) { %>
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

/**
 * GET /auth/:provider/callback
 * Link OAuth provider.
 */

var getOauthLink = function(req, res, next) {
    if (!req.xhr) {
        res.redirect('/');
    }
    else {
        authConf.setTokenCookie(req, res);
    }
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 * @param provider
 */

var getOauthUnlink = function(req, res, next) {
    var provider = req.params.provider;
    User.find({
        where: {
            id: req.user.id
        }
    }).success(function(user) {
        // Remove provider token
        user[provider] = null;
        user[provider + 'Token'] = null;
        if (user[provider + 'Secret']) {
            user[provider + 'Secret'] = null;
        }

        user.save().success(function() {
            req.flash('info', {
                msg: provider + ' account has been unlinked.'
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
    });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */

var getReset = function(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    User.find({
        where: {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: {gt: Date.now()}
        }
    }).success(function(user) {
        if (!user) {
            req.flash('errors', {
                msg: 'Password reset token is invalid or has expired.'
            });
            return res.redirect('/forgot');
        }
        res.render('account/reset', {
            title: 'Password Reset'
        });
    }).error(function(err) {
        if (err) {
            return next(err);
        }
    });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 * @param token
 */

var postReset = function(req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long.').len(4);
    req.assert('confirm', 'Passwords must match.').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('back');
    }

    async.waterfall([
        function(done) {
            User.find({
                where: {
                    resetPasswordToken: req.params.token,
                    resetPasswordExpires: {gt: Date.now()}
                }
            }).success(function(user) {
                if (!user) {
                    req.flash('errors', {
                        msg: 'Password reset token is invalid or has expired.'
                    });
                    return res.redirect('back');
                }

                user.password = req.body.password;
                user.resetPasswordToken = null;
                user.resetPasswordExpires = null;

                user.save().success(function() {
                    req.logIn(user, function(err) {
                        if (err) {
                            return done(err);
                        }
                        done(null, user);
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
        },
        function(user, done) {
            var transporter = nodemailer.createTransport();
            var mailOptions = {
                to: user.email,
                from: 'yeogurt@yoururl.com',
                subject: 'Your Yeogurt password has been changed',
                text: 'Hello,\n\n' +
                    'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
            };
            transporter.sendMail(mailOptions, function(err) {
                req.flash('success', {
                    msg: 'Success! Your password has been changed.'
                });
                done(err);
            });
        }
    ], function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};

/**
 * GET /forgot
 * Forgot Password page.
 */

var getForgot = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('account/forgot', {
        title: 'Forgot Password'
    });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 * @param email
 */

var postForgot = function(req, res, next) {
    req.assert('email', 'Please enter a valid email address.').isEmail();

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/forgot');
        }
        else {
            res.json({
                errors: errors
            });
        }
    }

    async.waterfall([
        function(done) {
            crypto.randomBytes(16, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.find({
                where: {
                    email: req.body.email.toLowerCase()
                }
            }).success(function(user) {
                if (!user) {
                    if (!req.xhr) {
                        req.flash('errors', {
                            msg: 'No account with that email address exists.'
                        });
                        return res.redirect('/forgot');
                    }
                    else {
                        res.json({
                            errors: [{
                                msg: 'No account with that email address exists.'
                            }]
                        });
                    }
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save().success(function() {
                    done(null, token, user);
                });
            }).error(function(err) {
                if (err) {
                    return next(err);
                }
            });
        },
        function(token, user, done) {
            var transporter = nodemailer.createTransport();
            var mailOptions = {
                to: user.email,
                from: 'yeogurt@yoururl.com',
                subject: 'Reset your password on Yeogurt',
                text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            transporter.sendMail(mailOptions, function(err) {
                if (!req.xhr) {
                    req.flash('info', {
                        msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
                    });
                }
                else {
                    res.json({
                        info: [{
                            msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
                        }]
                    });
                }
                done(err, 'done');
            });
        }
    ], function(err) {
        if (err) {
            return next(err);
        }
        if (!req.xhr) {
            res.redirect('/forgot');
        }
    });<% } else { %>

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/forgot');
    }

    async.waterfall([
        function(done) {
            crypto.randomBytes(16, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.find({
                where: {
                    email: req.body.email.toLowerCase()
                }
            }).success(function(user) {
                if (!user) {
                    req.flash('errors', {
                        msg: 'No account with that email address exists.'
                    });
                    return res.redirect('/forgot');
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save().success(function() {
                    done(null, token, user);
                });
            }).error(function(err) {
                if (err) {
                    return next(err);
                }
            });
        },
        function(token, user, done) {
            var transporter = nodemailer.createTransport();
            var mailOptions = {
                to: user.email,
                from: 'yeogurt@yoururl.com',
                subject: 'Reset your password on Yeogurt',
                text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            transporter.sendMail(mailOptions, function(err) {
                req.flash('info', {
                    msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
                });
                done(err, 'done');
            });
        }
    ], function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/forgot');
    });<% } %>
};

module.exports = {
    getLogin: getLogin,
    postLogin: postLogin,
    logout: logout,
    getSignup: getSignup,
    postSignup: postSignup,
    getAccount: getAccount,
    postUpdateProfile: postUpdateProfile,
    postUpdatePassword: postUpdatePassword,
    postDeleteAccount: postDeleteAccount,
    getOauthLink: getOauthLink,
    getOauthUnlink: getOauthUnlink,
    getReset: getReset,
    postReset: postReset,
    getForgot: getForgot,
    postForgot: postForgot
};
