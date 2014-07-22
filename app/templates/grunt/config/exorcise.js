/**
 * Configuration for extracting browserify sourcemap with exorcise task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('exorcise', {
        server: {
            options: {},
            files: {
                '<%%= yeogurt.server %>/scripts/app.js.map': ['<%%= yeogurt.server %>/scripts/app.js'],
            }
        },
        dist: {
            options: {},
            files: {
                '<%%= yeogurt.dist %>/scripts/app.js.map': ['<%%= yeogurt.dist %>/scripts/app.js'],
            }
        }
    });

};

module.exports = taskConfig;
