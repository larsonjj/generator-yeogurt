'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.controller');
var router = express.Router();

router
    .get('/', passport.authenticate('', {
        failureRedirect: '/login'
    }))
    .get('/callback', passport.authenticate('twitter', {
        failureRedirect: '/login'
    }), auth.linkOAuth);

module.exports = router;
