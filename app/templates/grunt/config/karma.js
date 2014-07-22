/**
 * Configuration for imagemin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

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

};

module.exports = taskConfig;
