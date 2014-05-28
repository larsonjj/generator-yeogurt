/**
 * Configuration for extracting browserify sourcemap with exorcise task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('exorcise', {
        server: {
            options: {},
            files: {
                '<%%= yeogurt.server %>/scripts/main.js.map': ['<%%= yeogurt.server %>/scripts/main.js'],
            }
        },
        dist: {
            options: {},
            files: {
                '<%%= yeogurt.dist %>/scripts/main.js.map': ['<%%= yeogurt.dist %>/scripts/main.js'],
            }
        }
    });

    // grunt.loadNpmTasks('grunt-exorcise');
};