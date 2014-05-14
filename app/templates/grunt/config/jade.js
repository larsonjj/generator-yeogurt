/**
 * jade.js
 * Configuration for Jade task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jade', {
        server: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: true
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/views/',
            dest: '<%%= yeogurt.server %>/',
            src: ['*.jade'],
            ext: '.html'
        },
        dist: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: false
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/views/',
            dest: '<%%= yeogurt.dist %>/',
            src: ['*.jade'],
            ext: '.html'
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jade');
};