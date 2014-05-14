/**
 * requirejs.js
 * Configuration for Require task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('requirejs', {
        dist: {
            options: {
                name: 'main',
                baseUrl: '<%%= yeogurt.dev %>/scripts/',
                mainConfigFile: '<%%= yeogurt.dev %>/scripts/main.js',
                out: '<%%= yeogurt.dist %>/scripts/main.js',
                optimize: 'uglify2',
                generateSourceMaps: true,
                preserveLicenseComments: false,
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-requirejs');
};