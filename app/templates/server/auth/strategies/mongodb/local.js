'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Sign in using Email and Password.

var strategy = function(User) {
    passport.use(new LocalStrategy({
        usernameField: 'username'
    }, function(username, password, done) {
        // Check to see whether to search for email or username
        var searchInput = (username.indexOf('@') > -1) ? {email: username.toLowerCase()} : {username: username.toLowerCase()};
        User.findOne(searchInput, function(err, user) {
            if (!user) {
                return done(null, false, {
                    message: 'Invalid email or password.'
                });
            }
            user.comparePassword(password, function(err, isMatch) {
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: 'Invalid username or password.'
                    });
                }
            });
        });
    }));
};

module.exports = strategy;
