/**
 * Configuration for cssmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('cssmin', {
        options: {
            sourceMap: true
        }
    });

};

module.exports = taskConfig;
