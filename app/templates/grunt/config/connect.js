/**
 * connect.js
 * Configuration for connect task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('connect', {
        options: {
            port: 9010,
            livereload: 35729,
            // change this to '0.0.0.0' to access the server from outside
            hostname: '0.0.0.0'
        },
        livereload: {
            options: {
                open: 'http://0.0.0.0:9010/.server/index.html',
                base: '<%%= yeogurt.dev %>'
            }
        },
        test: {
            options: {
                port: 9011,
                base: [
                    'test',
                    '<%%= yeogurt.dev %>'
                ]
            }
        },
        dist: {
            options: {
                open: 'http://0.0.0.0:9010/index.html',
                base: '<%%= yeogurt.dist %>',
                livereload: false
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-connect');
};