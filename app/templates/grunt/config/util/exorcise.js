/**
 * Configuration for extracting browserify sourcemap with exorcise task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('exorcise', {
        server: {
            options: {},
            files: {
                '<%%= yeogurt.staticServer %>/scripts/main.js.map': ['<%%= yeogurt.staticServer %>/scripts/main.js'],
            }
        },
        dist: {
            options: {},
            files: {
                '<%%= yeogurt.dist %>/scripts/main.js.map': ['<%%= yeogurt.dist %>/scripts/main.js'],
            }
        }
    });

};

module.exports = taskConfig;
