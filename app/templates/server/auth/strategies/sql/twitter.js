'use strict';

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var secrets = require('../../config/secrets');
var uuid = require('node-uuid');

// Sign in with Twitter.
var strategy = function(User) {
    passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
        // If user is already logged in.
        if (req.user) {
            // Check if there is an existing account with a twitter id.
            User.find({
                where: {
                    twitter: profile.id
                }
            }).success(function(existingUser) {
                // If there is an existing account, return an error message.
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.'
                    });
                    done(null);
                // Otherwise link the facebook account with currently logged-in user.
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
        // If user is not logged in.
        } else {
            // Check if it's a user who already has a twitter account linked.
            User.find({
                where: {
                    twitter: profile.id
                }
            }).success(function(existingUser) {
                // If user already has a twitter account linked, sign in and we are done.
                if (existingUser) {
                    return done(null, existingUser);
                }
                // Otherwise check if there is an existing account with the twitter account's email.
                User.find({
                    where: {
                        username: profile._json.screen_name
                    }
                }).success(function(existingUsernameUser) {
                    // If there is an existing email account, return an error message
                    if (existingUsernameUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using the username "' + existingUsernameUser.username +
                                 '". If it is your account, sign in below or click on "Forgot you password?" to reset your password.'
                        });
                        done(null);
                    // Otherwise create a new account
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

                        // Build unique ID to appease passport's serializer
                        user.id = uuid.v1();

                        // Set flag to let passport callback know a new user needs to be created
                        req.newUser = true;
                        done(null, user);
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
