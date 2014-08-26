/**
 * Configuration for connect task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('connect', {
        options: {
            port: 9010,
            livereload: 35729,
            hostname: '127.0.0.1'
        },
        server: {
            options: {
                open: 'http://127.0.0.1:9010/',
                base: '<%= yeogurt.client %>/.serve'
            }
        },
        dist: {
            options: {
                open: 'http://127.0.0.1:9010/',
                base: '<%= yeogurt.dist %>',
                livereload: false
            }
        }
    });

};

module.exports = taskConfig;
