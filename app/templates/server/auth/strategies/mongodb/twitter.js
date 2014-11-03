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
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Twitter.
var strategy = function(User) {
    passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
        if (req.user) {
            User.findOne({
                twitter: profile.id
            }, function(err, existingUser) {
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.'
                    });
                    done(err);
                } else {
                    User.find({
                        username: req.user.username
                    }, function(err, user) {
                        var name = profile._json.name.split(' ');
                        user.username = profile._json.screen_name;
                        user.firstName = name[0];
                        user.lastName = name[name.length - 1];
                        user.twitter = profile.id;
                        user.twitterToken = accessToken;
                        user.twitterSecret = tokenSecret;
                        user.location = user.location || profile._json.location;
                        user.picture = user.picture || profile._json.profile_image_url_https;
                        user.save(function(err) {
                            req.flash('info', {
                                msg: 'Twitter account has been linked.'
                            });
                            done(err, user);
                        });
                    });
                }
            });

        } else {
            User.findOne({
                twitter: profile.id
            }, function(err, existingUser) {
                if (existingUser) {
                    return done(null, existingUser);
                }
                var name = profile._json.name.split(' ');
                var user = new User();
                // Twitter does not provide an email address.
                user.username = profile._json.screen_name;
                user.firstName = name[0];
                user.lastName = name[name.length - 1];
                user.twitter = profile.id;
                user.twitterToken = accessToken;
                user.twitterSecret = tokenSecret;
                user.location = profile._json.location;
                user.picture = profile._json.profile_image_url_https;
                user.save(function(err) {
                    done(err, user);
                });
            });
        }
    }));
};

module.exports = strategy;
