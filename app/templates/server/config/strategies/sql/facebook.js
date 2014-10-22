'use strict';

var FacebookStrategy = require('passport-facebook').Strategy;
var secrets = require('../secrets');

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a <provider> id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Facebook.
var strategy = function(passport, User) {
    passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.find({
                where: {
                    facebook: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.'
                    });
                    done(null);
                } else {
                    User.find({
                        where: {
                            id: req.user.id
                        }
                    }).success(function(user) {
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.name = user.name || profile.displayName;
                        user.gender = user.gender || profile._json.gender;
                        user.picture = user.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        User.build(user).save().success(function() {
                            req.flash('info', {
                                msg: 'Facebook account has been linked.'
                            });
                            done(null, user);
                        });
                    }).error(function(err) {
                        if (err) {
                            return next(err);
                        }
                    });
                }
            }).error(function(err) {
                if (err) {
                    return next(err);
                }
            });
        } else {
            User.find({
                where: {
                    facebook: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                User.find({
                    where: {
                        email: profile._json.email
                    }
                }).success(function(existingEmailUser) {
                    if (existingEmailUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.'
                        });
                        done(null);
                    } else {
                        var user = {};
                        user.email = profile._json.email;
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.name = profile.displayName;
                        user.gender = profile._json.gender;
                        user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.location = (profile._json.location) ? profile._json.location.name : '';
                        User.build(user).save().success(function() {
                            done(null, user);
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
            });
        }
    }));
};

module.exports = strategy;
