'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Sign in using Email and Password.

var strategy = function(User) {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, function(username, password, done) {
    // Search for user in Database
    User.findOne({
      email: username
    }, function(err, user) {
      if (!user) {
        return done(null, false, {
          message: 'Invalid email or password.'
        });
      }
      // Verify password for user
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
