/**
 * Configuration for extracting browserify sourcemap with exorcise task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('exorcise', {
        server: {
            options: {},
            files: {
                '<%%= yeogurt.tmp %>/scripts/main.js.map': ['<%%= yeogurt.tmp %>/scripts/main.js'],
            }
        },
        dist: {
            options: {},
            files: {
                '<%%= yeogurt.dist %>/scripts/main.js.map': ['<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>scripts/main.js'],
            }
        }
    });

};

module.exports = taskConfig;
