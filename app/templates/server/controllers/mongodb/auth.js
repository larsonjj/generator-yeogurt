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
var authConf = require('../auth');<% if (useJwt) { %>
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validateJwt = expressJwt({ secret: secrets.sessionSecret });<% } %>

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

var signup = function(req, res) {
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

    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({
        email: req.body.email
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
                var token = authConf.signToken(user.id, user.role);
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
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({
        email: req.body.email
    }, function(err, existingUser) {
        if (existingUser) {
            req.flash('errors', {
                msg: 'Account with that email address already exists.'
            });
            return res.redirect('/signup');
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
    req.assert('password', 'Password must be at least 4 characters long.').len(4);
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
            User.findOne({
                email: req.body.email.toLowerCase()
            }, function(err, user) {
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
            User.findOne({
                email: req.body.email.toLowerCase()
            }, function(err, user) {
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
 * Link OAuth provider.
 */

var linkOAuth = function(req, res, next) {
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

var unlinkOAuth = function(req, res, next) {
    var provider = req.params.provider;
    User.findById(req.user.id, function(err, user) {
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
            res.redirect('/account');
        });
    });
};

var isAuthenticated = function(req, res, next) {
    if (!req.xhr) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
    else {
        // allow access_token to be passed through query parameter as well
        if (req.body && req.body.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.body.access_token;
        }
        // Validate jwt token
        return validateJwt(req, res, next);
    }
};

// Check to see if user is authorized for specific provider.

var isAuthorized = function(req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];

    if (req.user[provider + 'Token']) {
        next();
    }
    else {
        res.redirect('/auth/' + provider);
    }
};

/**
 * Checks if the user role meets the minimum requirements of the route
 */
var hasRole = function(roleRequired) {
    if (!roleRequired) {
        throw new Error('Required role needs to be set');
    }

    function meetsRequirements(req, res, next) {
        if (secrets.userRoles.indexOf(req.user.role) >= secrets.userRoles.indexOf(roleRequired)) {
            next();
        } else {
            if (!req.xhr) {
                res.redirect('/login');
            }
            else {
                res.send(403);
            }
        }
    };
    return meetsRequirements;
}<% if (useJwt) { %>

/**
 * Returns a jwt token signed by the app secret
 */
var signToken = function(id) {
    return jwt.sign({
        id: id
    }, secrets.sessionSecret, {
        expiresInMinutes: 60 * 24 // 24 hours
    });
}

/**
 * Set token cookie directly for oAuth strategies
 */
var setTokenCookie = function(req, res) {
    if (!req.user) {
        return res.json(404, {
            message: 'Something went wrong, please try again.'
        });
    }
    var token = signToken(req.user.id, req.user.role);
    res.cookie('token', JSON.stringify(token));
    res.redirect('/');
}<% } %>

module.exports = {
    login: login,
    postLogin: postLogin,
    logout: logout,
    signup: signup,
    postSignup: postSignup,
    reset: reset,
    postReset: postReset,
    forgot: forgot,
    postForgot: postForgot,
    linkOAuth: linkOAuth,
    unlinkOAuth: unlinkOAuth,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized,
    hasRole: hasRole,<% if (useJwt) { %>
    signToken: signToken,
    setTokenCookie: setTokenCookie<% } %>
};
