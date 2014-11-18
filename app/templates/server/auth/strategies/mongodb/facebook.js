'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var secrets = require('../../config/secrets');

// Sign in with Facebook.
var strategy = function(User) {
    passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
        // If user is already logged in.
        if (req.user) {
            // Check if there is an existing account with a facebook id.
            User.findOne({
                facebook: profile.id
            }, function(err, existingUser) {
                // If there is an existing account, return an error message.
                if (existingUser) {
                    req.flash('errors', {
                        msg: 'Your Facebook account is already linked to another account. Sign in with that account below or click on "Forgot you password?" to reset your password.'
                    });
                    done(err);
                // Otherwise link the facebook account with currently logged-in user.
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
        // If user is not logged in.
        } else {
            // Check if it's a user who already has a facebook account linked.
            User.findOne({
                facebook: profile.id
            }, function(err, existingUser) {
                // If user already has a facebook account linked, sign in and we are done.
                if (existingUser) {
                    return done(null, existingUser);
                }
                // Otherwise check if there is an existing account with the facebook account's email.
                User.findOne({
                    email: profile._json.email
                }, function(err, existingEmailUser) {
                    // If there is an existing email account, return an error message
                    if (existingEmailUser) {
                        req.flash('errors', {
                            msg: 'There is already an account using the email "' + existingEmailUser.email + '". If it is your account, sign in below or click on "Forgot you password?" to reset your password.'
                        });
                        done(err);
                    // Otherwise create a new account
                    } else {
                        var user = new User();
                        user.firstName = profile._json.first_name;
                        user.lastName = profile._json.last_name;
                        user.email = profile._json.email;
                        user.facebook = profile.id;
                        user.facebookToken = accessToken;
                        user.gender = profile._json.gender;
                        user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                        user.location = (profile._json.location) ? profile._json.location.name : '';

                        // Set flag to let passport callback know a new user needs to be created
                        req.newUser = true;
                        done(null, user);
                    }
                });
            });
        }
    }));
};

module.exports = strategy;
