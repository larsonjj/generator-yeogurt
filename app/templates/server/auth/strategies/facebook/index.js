'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.controller');

var router = express.Router();

router
    .get('/', passport.authenticate('facebook', {
        scope: ['email'],
        failureRedirect: '/login'
    }))
    .get('/callback', passport.authenticate('facebook', {
        failureRedirect: '/login'
    }), auth.linkOAuth);

module.exports = router;
