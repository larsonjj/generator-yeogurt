/**
 * Configuration for clean task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('clean', {
        server: ['<%%= yeogurt.server %>/'],
        dist: ['<%%= yeogurt.dist %>/'],
        temp: [
            '.tmp'
        ]
    });

};

module.exports = taskConfig;
