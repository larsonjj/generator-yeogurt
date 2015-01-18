/**
 * Main Controller
 */

'use strict';

var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var db = require('../config/database');
var User = db.user;

/**
 * GET /login
 * Login page.
 */

var login = function(req, res) {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/login', {
    title: 'Login'
  });
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
    req.flash('errors', errors);
    return res.redirect('/login');
  }

  // Authenticate using local strategy
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('errors', {
        msg: info.message
      });
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      req.flash('success', {
        msg: 'Success! You are logged in.'
      });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */

var logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * GET /signup
 * Signup page.
 */

var signup = function(req, res) {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/signup', {
    title: 'Create Account'
  });
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
  User.find({
    where: {
      resetPasswordToken: req.params.token,
      // Make sure token hasn't expired
      resetPasswordExpires: {gt: new Date()}
    }
  }).success(function(user) {
     if (!user) {
      req.flash('errors', {
        msg: 'Password reset token is invalid or has expired.'
      });
      return res.redirect('/forgot');
    }
    res.render('account/reset', {
      title: 'Password Reset'
    });
  }).error(function(err) {
    if (err) {
      return next(err);
    }
  });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 * @param token
 */

var postReset = function(req, res, next) {
  req.assert('password', 'Password must be at least 6 characters long.').len(6);
  req.assert('confirm', 'Passwords must match.').equals(req.body.password);

  // Run validation
  var errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('back');
  }

  // Run asnyc operations in a synchronous fashion
  async.waterfall([
    function(done) {
      // Find user with assigned reset token
      User.find({
        where: {
          resetPasswordToken: req.params.token,
          // Make sure token hasn't expired
          resetPasswordExpires: {gt: new Date()}
        }
      }).success(function(user) {
        if (!user) {
          req.flash('errors', {
            msg: 'Password reset token is invalid or has expired.'
          });
          return res.redirect('back');
        }

        user.password = req.body.password;

        // Delete token
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;

        // Save new password
        user.save().success(function() {
          // Login user
          req.logIn(user, function(err) {
            if (err) {
              return next(err);
            }
            done(null, user);
          });
        }).error(function(err) {
          if (err) {
            return next(err);
          }
        });
      }).error(function(err) {
        if (err) {
          return next(err);
        }
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
        req.flash('success', {
          msg: 'Success! Your password has been changed.'
        });
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

/**
 * GET /forgot
 * Forgot Password page.
 */

var forgot = function(req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('account/forgot', {
    title: 'Forgot Password'
  });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 * @param email/username
 */

var postForgot = function(req, res, next) {

  req.assert('email', 'Please enter a valid email address.').isEmail();

  // Run validation
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/forgot');
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
      User.find({
        where: {
          email: req.body.email
        }
      }).success(function(user) {
        if (!user) {
          req.flash('errors', {
            msg: 'No account with that email address exists.'
          });
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = new Date(new Date().getTime() + 3600000); // 1 hour

        // Save token to user account
        user.save().success(function() {
          done(null, token, user);
        });
      }).error(function(err) {
        if (err) {
          return next(err);
        }
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
        req.flash('info', {
          msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
        });
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/forgot');
  });
};

/**
 * GET /settings
 * Settings page.
 */

var settingsPage = function(req, res) {
  res.render('account/settings', {
    title: 'Account Management'
  });
};

module.exports = {
  login: login,
  postLogin: postLogin,
  logout: logout,
  signup: signup,
  postReset: postReset,
  reset: reset,
  forgot: forgot,
  postForgot: postForgot,
  settings: settingsPage
};
