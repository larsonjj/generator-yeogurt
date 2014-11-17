/**
 * Main Controller
 */

'use strict';

var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('mongoose').model('user');
var secrets = require('../config/secrets');
var auth = require('../auth');

/**
 * GET /login
 * Login page.
 */

var login = function(req, res) {
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

    var context = (req.body.username.indexOf('@') > -1) ? 'email' : 'username';

    if (context === 'email') {
        req.assert('username', 'Please enter a valid email address.').isEmail();
    }
    else {
        req.assert('username', 'Username cannot be blank').notEmpty();
    }

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/login');
        }
        else {
            return res.json(401, errors);
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
                var token = auth.signToken(user.id, user.role);
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

var signup = function(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/signup', {
        title: 'Create Account'
    });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */

var reset = function(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    User
        .findOne({
            resetPasswordToken: req.params.token
        })
        .where('resetPasswordExpires').gt(Date.now())
        .exec(function(err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                req.flash('errors', {
                    msg: 'Password reset token is invalid or has expired.'
                });
                return res.redirect('/forgot');
            }
            res.render('account/reset', {
                title: 'Password Reset'
            });
        });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 * @param token
 */

var postReset = function(req, res, next) {
    req.assert('password', 'Password must be at least 6 characters long.').len(6);
    req.assert('confirm', 'Passwords must match.').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('back');
    }

    async.waterfall([
        function(done) {
            User
                .findOne({
                    resetPasswordToken: req.params.token
                })
                .where('resetPasswordExpires').gt(Date.now())
                .exec(function(err, user) {
                    if (!user) {
                        req.flash('errors', {
                            msg: 'Password reset token is invalid or has expired.'
                        });
                        return res.redirect('back');
                    }

                    user.password = req.body.password;
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;

                    user.save(function(err) {
                        if (err) {
                            return next(err);
                        }
                        req.logIn(user, function(err) {
                            done(err, user);
                        });
                    });
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

var forgot = function(req, res) {
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
 * @param username
 */

var postForgot = function(req, res, next) {
    var context = (req.body.username.indexOf('@') > -1) ? 'email' : 'username';

    if (context === 'email') {
        req.assert('username', 'Please enter a valid email address.').isEmail();
    }
    else {
        req.assert('username', 'Username cannot be blank').notEmpty();
    }

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
            // Check to see whether to search for email or username
            var searchInput = (context === 'email') ? {email: req.body.username.toLowerCase()} : {username: req.body.username.toLowerCase()};
            User.findOne(searchInput, function(err, user) {
                if (err) {
                    return next(err);
                }

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

                user.save(function(err) {
                    done(err, token, user);
                });
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
            var searchInput = (context === 'email') ? {email: req.body.username.toLowerCase()} : {username: req.body.username.toLowerCase()};
            User.findOne(searchInput, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    req.flash('errors', {
                        msg: 'No account with that email address exists.'
                    });
                    return res.redirect('/forgot');
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function(err) {
                    done(err, token, user);
                });
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

/**
 * GET /auth/:provider/callback
 * Link OAuth provider or request more information
 */

var linkOAuth = function(req, res, next) {<% if (useJwt) { %>
    if (!req.newUser) {
        if (!req.xhr) {
            res.redirect('/');
        }
        else {
            auth.setTokenCookie(req, res);
        }
    }
    else {
        if (!req.xhr) {
            // perserve user data through redirect
            req.session.newUser = req.user;
            res.redirect('/social/signup');
        }
    }<% } else { %>
    if (!req.newUser) {
        auth.setTokenCookie(req, res);
    }
    else {
        // perserve user data through redirect
        req.session.newUser = req.user;
        res.redirect('/social/signup');
    }<% } %>
};

/**
 * GET /social/signup
 * Form to gather username and email for social account
 */

var socialSignup = function(req, res, next) {<% if (useJwt) { %>
    if (!req.xhr) {
        res.render('account/social-signup', {
            newUser: req.session.newUser
        });
        // Cleanup session data
        req.session.newUser = null;
    }
    else {
        res.json({
            newUser: req.session.newUser
        });
        // Cleanup session data
        req.session.newUser = null;
    }<% } else { %>
    res.render('account/social-signup', {
        newUser: req.session.newUser
    });
    // Cleanup session data
    req.session.newUser = null;<% } %>
};

/**
 * POST /social/signup
 * Link OAuth provider.
 */

var postSocialSignup = function(req, res, next) {
    req.assert('email', 'Please enter a valid email address.').isEmail();
    req.assert('username', 'Username cannot be blank').notEmpty();

    var errors = req.validationErrors();<% if (useJwt) { %>

    if (errors) {
        if (!req.xhr) {
            req.flash('errors', errors);
            return res.redirect('/social/signup');
        }
        else {
            res.json({
                errors: errors
            });
        }
    }
    User.findOne({
        email: req.body.email
    }, function(err, existingEmail) {
        if (existingEmail) {
            if (!req.xhr) {
                req.flash('errors', {
                    msg: 'There is already an account using this email address.'
                });
            }
            else {
                res.json({
                    errors: {
                        msg: 'There is already an account using this email address.'
                    }
                });
            }
        }
        else {
            User.findOne({
                username: req.body.username
            }, function(err, existingUsername) {
                if (err) {
                    return next(err);
                }
                if (existingUsername) {
                    if (!req.xhr) {
                        req.flash('errors', {
                            msg: 'There is already an account using this username.'
                        });
                    }
                    else {
                        res.json({
                            errors: {
                                msg: 'There is already an account using this username.'
                            }
                        });
                    }
                } else {
                    var user = new User();

                    user.username = req.body.username;
                    user.email = req.body.email;
                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    user.location = req.body.location;
                    user.picture = req.body.picture;
                    user.gender = req.body.gender;

                    if (req.body.facebook) {
                        user.facebook = req.body.facebook;
                        user.facebookToken = req.body.facebookToken;
                    }
                    else if (req.body.twitter) {
                        user.twitter = req.body.twitter;
                        user.twitterToken = req.body.twitterToken;
                        user.twitterSecret = req.body.twitterSecret;
                    }

                    user.save(function(err) {
                        if (err) {
                            return next(err);
                        }
                        if (!req.xhr) {
                            req.logIn(user, function(err) {
                                if (err) {
                                    req.flash('errors', {
                                        msg: 'Error logging in, please try signing up again.'
                                    });
                                }
                                res.redirect('/');
                            });
                        }
                        else {
                            auth.setTokenCookie(req, res);
                        }
                    });
                }
            });
        }
    });<% } else { %>
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/social/signup');
    }
    User.findOne({
        email: req.body.email
    }, function(err, existingEmail) {
        if (existingEmail) {
            req.flash('errors', {
                msg: 'There is already an account using this email address.'
            });
        }
        else {
            User.findOne({
                username: req.body.username
            }, function(err, existingUsername) {
                if (existingUsername) {
                    if (err) {
                        return next(err);
                    }
                    req.flash('errors', {
                        msg: 'There is already an account using this username.'
                    });
                } else {
                    var user = new User();

                    user.username = req.body.username;
                    user.email = req.body.email;
                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    user.location = req.body.location;
                    user.picture = req.body.picture;
                    user.gender = req.body.gender;

                    if (req.body.facebook) {
                        user.facebook = req.body.facebook;
                        user.facebookToken = req.body.facebookToken;
                    }
                    else if (req.body.twitter) {
                        user.twitter = req.body.twitter;
                        user.twitterToken = req.body.twitterToken;
                        user.twitterSecret = req.body.twitterSecret;
                    }

                    user.save(function(err) {
                        if (err) {
                            return next(err);
                        }
                        req.logIn(user, function(err) {
                            if (err) {
                                req.flash('errors', {
                                    msg: 'Error logging in, please try signing up again.'
                                });
                            }
                            res.redirect('/');
                        });
                    });
                }
            });
        }
    });<% } %>

};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 * @param provider
 */

var unlinkOAuth = function(req, res, next) {
    var provider = req.params.provider;
    User.findOne({
            username: req.user.username
        }, function(err, user) {
        if (err) {
            return next(err);
        }

        // Remove provider token
        user[provider] = undefined;
        user[provider + 'Token'] = undefined;
        if (user[provider + 'Secret']) {
            user[provider + 'Secret'] = undefined;
        }

        user.save(function(err) {
            if (err) {
                return next(err);
            }
            req.flash('info', {
                msg: provider + ' account has been unlinked.'
            });
            res.redirect('/user/' + req.user.username);
        });
    });
};

/**
 * GET /settings
 * Settings page.
 */

var settings = function(req, res) {<% if (useJwt) { %>
    if (!req.xhr) {
        res.render('account/settings', {
            title: 'Account Management'
        });
    }
    else {
        res.json(req.user);
    }<% } else { %>
    res.render('account/settings', {
        title: 'Account Management'
    });
    <% } %>
};

module.exports = {
    login: login,
    postLogin: postLogin,
    logout: logout,
    signup: signup,
    socialSignup: socialSignup,
    postSocialSignup: postSocialSignup,
    reset: reset,
    postReset: postReset,
    forgot: forgot,
    postForgot: postForgot,
    linkOAuth: linkOAuth,
    unlinkOAuth: unlinkOAuth,
    settings: settings
};
