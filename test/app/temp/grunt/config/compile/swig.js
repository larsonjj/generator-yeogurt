/**
 * Configuration for swig task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('swig', {
        server: {
            expand: true,
            cwd: '<%= yeogurt.client %>/templates/',
            dest: '<%= yeogurt.staticServer %>/',
            src: ['*.swig'],
            ext: '.html'
        },
        dist: {
            expand: true,
            cwd: '<%= yeogurt.client %>/templates/',
            dest: '<%= yeogurt.dist %>/',
            src: ['*.swig'],
            ext: '.html'
        }
    });

};

module.exports = taskConfig;
