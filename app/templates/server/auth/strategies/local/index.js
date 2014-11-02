'use strict';

var express = require('express');
var auth = require('../auth.controller');

var router = express.Router();

router
    .post('/', auth.login);

module.exports = router;
