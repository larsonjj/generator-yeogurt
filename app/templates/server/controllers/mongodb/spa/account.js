/**
 * Main Controller
 */

'use strict';

var _ = require('lodash');
var path = require('path');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('mongoose').model('user');
var settings = require('../config/env/default');
var auth = require('../auth');

/**
 * GET /login
 * Login page.
 */

var login = function(req, res) {
  // Render index.html to allow application to handle routing
  res.sendFile(path.join(settings.staticAssets, '/index.html'), { root: settings.root });
};

/**
 * POST /login
 * Sign in using email and password.
 * @param email
 * @param password
 */

var postLogin = function(req, res, next) {

  req.assert('email', 'Please enter a valid email address.').isEmail();

  // Run validation
  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({
      errors: errors
    });
  }

  // Authenticate using local strategy
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(404).json({
        info: [{
          msg: info.message
        }]
      });
    }

    // Send user and authentication token
    var token = auth.signToken(user._id, user.role);
    res.status(200).json({
      token: token,
      // Don't send password hash
      user: _.omit(user.toObject(), 'password')
    });
  })(req, res, next);
};

/**
 * GET /signup
 * Signup page.
 */

var signup = function(req, res) {
  // Render index.html to allow application to handle routing
  res.sendFile(path.join(settings.staticAssets, '/index.html'), { root: settings.root });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */

var reset = function(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  // Find user with assigned reset token
  User
    .findOne({
      resetPasswordToken: req.params.token
    })
    // Make sure token hasn't expired
    .where('resetPasswordExpires').gt(new Date())
    .exec(function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        /**
         * Attach error=invalid parameter to redirect
         * to inform client-side app of a failed reset
         */
        return res.redirect('/forgot?error=invalid');
      }
      // Render index.html to allow application to handle routing
      res.sendFile(path.join(settings.staticAssets, '/index.html'), { root: settings.root });
    });
};

/**
 * POST /reset/:token
 * Process reset password request.
 * @param token
 */

var postReset = function(req, res, next) {
  req.assert('password', 'Password must be at least 6 characters long.').len(6);
  req.assert('confirm', 'Passwords must match.').equals(req.body.password);

  // Run validation
  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({
      errors: errors
    });
  }

  // Run asnyc operations in a synchronous fashion
  async.waterfall([
    function(done) {
      // Find user with assigned reset token
      User
        .findOne({
          resetPasswordToken: req.params.token
        })
        // Make sure token hasn't expired
        .where('resetPasswordExpires').gt(new Date())
        .exec(function(err, user) {
          if (!user) {
            return res.status(400).json({
              errors: [{
                msg: 'Password reset token is invalid or has expired.'
              }]
            });
          }

          user.password = req.body.password;

          // Delete token
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

          // Save new password
          user.save(function(err) {
            if (err) {
              return next(err);
            }
            done(null, user);
          });
        });
    },
    function(user, done) {
      // Setup email transport
      var transporter = nodemailer.createTransport();
      // Create email message
      var mailOptions = {
        to: user.email,
        from: 'yeogurt@yoururl.com',
        subject: 'Your Yeogurt password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      // Send email
      transporter.sendMail(mailOptions, function(err) {
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      success: [{
        msg: 'Success! Your password has been changed.'
      }]
    });
  });
};

/**
 * GET /forgot
 * Forgot Password page.
 */

var forgot = function(req, res) {
  // Render index.html to allow application to handle routing
  res.sendFile(path.join(settings.staticAssets, '/index.html'), { root: settings.root });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 * @param email
 */

var postForgot = function(req, res, next) {

  req.assert('email', 'Please enter a valid email address.').isEmail();

  // Run validation
  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({
      errors: errors
    });
  }

  // Run asnyc operations in a synchronous fashion
  async.waterfall([
    function(done) {
      // Create token
      crypto.randomBytes(16, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      // Search for user
      User.findOne({
        email: req.body.email
      }, function(err, user) {
        if (err) {
          return next(err);
        }

        if (!user) {
          res.status(404).json({
            errors: [{
              msg: 'No account with that email address exists.'
            }]
          });
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = new Date(new Date().getTime() + 3600000); // 1 hour

        // Save token to user account
        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      // Setup email transport
      var transporter = nodemailer.createTransport();
      // Create email message
      var mailOptions = {
        to: user.email,
        from: 'yeogurt@yoururl.com',
        subject: 'Reset your password on Yeogurt',
        text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      // Send email
      transporter.sendMail(mailOptions, function(err) {
        done(err, user);
      });
    }
  ], function(err, user) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      info: [{
        msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
      }]
    });
  });
};

/**
 * GET /settings
 * Settings page.
 */

var settingsPage = function(req, res) {
  // Render index.html to allow application to handle routing
  res.sendFile(path.join(settings.staticAssets, '/index.html'), { root: settings.root });
};

module.exports = {
  login: login,
  postLogin: postLogin,
  signup: signup,
  postReset: postReset,
  reset: reset,
  forgot: forgot,
  postForgot: postForgot,
  settings: settingsPage
};
