/**
 * jshint.js
 * Configuration for JSHint task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jshint', {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        test: [
            'Gruntfile.js',
            '<%%= yeogurt.dev %>/scripts/{,*/}{,*/}*.js',
            '!<%%= yeogurt.dev %>/scripts/vendor/{,*/}*'
        ]
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
};