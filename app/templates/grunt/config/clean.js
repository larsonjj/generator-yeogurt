/**
 * clean.js
 * Configuration for clean task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('clean', {
        server: ['<%%= yeogurt.server %>/'],
        dist: ['<%%= yeogurt.dist %>/'],
        temp: [
            '.tmp'
        ]
    });

    // grunt.loadNpmTasks('grunt-contrib-clean');
};