/**
 * imagemin.js
 * Configuration for imagemin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('karma', {
        options: {
            configFile: 'karma.conf.js'
        },
        unit: {
            singleRun: true
        },
        //continuous integration mode: run tests once in PhantomJS browser.
        continuous: {
            singleRun: true,
            browsers: ['PhantomJS']
        }
    });

    // grunt.loadNpmTasks('grunt-karma');
};