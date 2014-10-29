'use strict';

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
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Twitter.
var strategy = function(passport, User) {
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
                    done(err);
                } else {
                    User.find({
                        where: {
                            id: req.user.id
                        }
                    }).success(function(user) {
                        user.twitter = profile.id;
                        user.twitterToken = accessToken;
                        user.twitterSecret = tokenSecret;
                        user.name = user.name || profile.displayName;
                        user.location = user.location || profile._json.location;
                        user.picture = user.picture || profile._json.profile_image_url_https;
                        user.save().success(function() {
                            req.flash('info', {
                                msg: 'Twitter account has been linked.'
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
                    twitter: profile.id
                }
            }).success(function(existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                var user = {};
                // Twitter will not provide an email address.  Period.
                // But a person’s twitter username is guaranteed to be unique
                // so we can "fake" a twitter email address as follows:
                user.email = profile.username + '@twitter.com';
                user.twitter = profile.id;
                user.twitterToken = accessToken;
                user.twitterSecret = tokenSecret;
                user.name = profile.displayName;
                user.location = profile._json.location;
                user.picture = profile._json.profile_image_url_https;
                User.build(user).save().success(function(user) {
                    done(null, user);
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
