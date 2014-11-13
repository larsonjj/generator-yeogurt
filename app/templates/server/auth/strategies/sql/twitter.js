'use strict';

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
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
 *     - Else check if there is an existing account with user's username.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Twitter.
var strategy = function(User) {
    passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
        if (req.user) {
            User.find({
                where: {
                    twitter: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.'
                    });
                    done(null);
                } else {
                    User.find({
                        where: {
                            id: req.user.id
                        }
                    }).success(function(user) {
                        var name = profile._json.name.split(' ');
                        user.firstName = user.firstName || name[0];
                        user.lastName = user.lastName || name[name.length - 1];
                        user.location = user.location || profile._json.location;
                        user.picture = user.picture || profile._json.profile_image_url_https;
                        user.twitter = profile.id;
                        user.twitterToken = accessToken;
                        user.twitterSecret = tokenSecret;
                        user.save().success(function() {
                            req.flash('info', {
                                msg: 'Twitter account has been linked.'
                            });
                            done(null, user);
                        });
                    }).error(function(err) {
                        if (err) {
                            return done(err);
                        }
                    });
                }
            }).error(function(err) {
                if (err) {
                    return done(err);
                }
            });
        } else {
            User.find({
                where: {
                    twitter: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                User.find({
                    where: {
                        username: profile._json.screen_name
                    }
                }).success(function(existingUsernameUser) {
                    if (existingUsernameUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using the username "' + existingUsernameUser.username +
                                 '". If it is your account, sign in below or click on "Forgot you password?" to reset your password.'
                        });
                        done(null);
                    } else {
                        var name = profile._json.name.split(' ');
                        var user = {};
                        // Twitter does not provide an email address, so assign a new username.
                        user.username = profile._json.screen_name;
                        user.firstName = name[0];
                        user.lastName = name[name.length - 1];
                        user.location = profile._json.location;
                        user.picture = profile._json.profile_image_url_https;
                        user.twitter = profile.id;
                        user.twitterToken = accessToken;
                        user.twitterSecret = tokenSecret;
                        User.build(user).save().success(function(user) {
                            done(null, user);
                        });
                    }
                });
            }).error(function(err) {
                if (err) {
                    return done(err);
                }
            });
        }
    }));
};

module.exports = strategy;
