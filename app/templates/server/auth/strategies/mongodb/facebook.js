'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var secrets = require('../../config/secrets');

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
var strategy = function(User) {
    passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
        if (req.user) {
            User.findOne({
                facebook: profile.id
            }, function(err, existingUser) {
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.'
                    });
                    done(err);
                } else {
                    User.findById(req.user.id, function(err, user) {
                        user.firstName = user.firstName || profile._json.first_name;
                        user.lastName = user.lastName || profile._json.last_name;
                        user.gender = user.gender || profile._json.gender;
                        user.picture = user.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.save(function(err) {
                            req.flash('info', {
                                msg: 'Facebook account has been linked.'
                            });
                            done(err, user);
                        });
                    });
                }
            });
        } else {
            User.findOne({
                facebook: profile.id
            }, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                User.findOne({
                    email: profile._json.email
                }, function(err, existingEmailUser) {
                    if (existingEmailUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.'
                        });
                        done(err);
                    } else {
                        var user = new User();
                        // Use email if no username is found
                        user.username = profile.username || profile._json.email;
                        user.firstName = profile._json.first_name;
                        user.lastName = profile._json.last_name;
                        user.email = profile._json.email;
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.gender = profile._json.gender;
                        user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.location = (profile._json.location) ? profile._json.location.name : '';
                        user.save(function(err) {
                            done(err, user);
                        });
                    }
                });
            });
        }
    }));
};

module.exports = strategy;
