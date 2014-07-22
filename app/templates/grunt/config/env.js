/**
 * Configuration for node environment task(s)
 */
'use strict';

var secrets = require('../../server/config/secrets');

var taskConfig = function(grunt) {

    grunt.config.set('env', {
        dev: {
            NODE_ENV: 'development'
        },
        prod: {
            NODE_ENV: 'production'
        },
        all: secrets
    });

};

module.exports = taskConfig;
