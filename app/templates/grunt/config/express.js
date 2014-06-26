/**
 * Configuration for express server task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('express', {
        options: {
            port: process.env.PORT || 9010
        },
        server: {
            options: {
                script: 'app.js',
                debug: true
            }
        },
        dist: {
            options: {
                script: 'app.js',
                node_env: 'production'
            }
        }
    });

    // grunt.loadNpmTasks('grunt-express');
};