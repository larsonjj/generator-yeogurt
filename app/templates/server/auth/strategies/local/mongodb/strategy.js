'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Sign in using Email and Password.

var strategy = function(User) {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, function(email, password, done) {
        User.findOne({
            email: email
        }, function(err, user) {
            if (!user) {
                return done(null, false, {
                    message: 'Email ' + email + ' not found'
                });
            }
            user.comparePassword(password, function(err, isMatch) {
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: 'Invalid email or password.'
                    });
                }
            });
        });
    }));
};

module.exports = strategy;
