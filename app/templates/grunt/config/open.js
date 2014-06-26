/**
 * Configuration for open task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('open', {
        server: {
            url: 'http://localhost:9010/'
        }
    });

    // grunt.loadNpmTasks('grunt-open');
};