'use strict';

var LocalStrategy = require('passport-local').Strategy;

// Sign in using Email and Password.

var strategy = function(passport, User) {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, function(email, password, done) {
        User.find({
            where: {
                email: email
            }
        }).success(function(user) {
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
        }).error(function(err) {
            if (err) {
                return next(err);
            }
        });
    }));
};

module.exports = strategy;
