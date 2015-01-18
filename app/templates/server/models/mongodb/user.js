'use strict';
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String,

  // Profile info
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },

  // Reset token
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// Run before saving any data
userSchema.pre('save', function(next) {
  var user = this;

  // Check to see if password has changed
  if (!user.isModified('password')) {
    return next();
  }

  // Salt and Hash password
  bcrypt.genSalt(5, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/**
 * Validate user's password.
 * Used by Passport-Local Strategy for password validation.
 */
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = userSchema;
