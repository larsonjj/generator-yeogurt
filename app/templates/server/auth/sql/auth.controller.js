'use strict';

var passport = require('passport');
var secrets = require('../config/secrets');<% if (useJwt) { %>
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validateJwt = expressJwt({ secret: secrets.sessionSecret });<% } %>

// Login Required middleware.

/**
 * POST /login
 * Sign in using email and password.
 * @param email
 * @param password
 */

var login = function(req, res, next) {
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
    linkOAuth: linkOAuth,
    unlinkOAuth: unlinkOAuth,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized,
    hasRole: hasRole,<% if (useJwt) { %>
    signToken: signToken,
    setTokenCookie: setTokenCookie<% } %>
};
