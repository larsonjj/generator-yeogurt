/**
 * Configuration for swig task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('swig', {
        server: {
            expand: true,
            cwd: '<%%= yeogurt.dev %>/views/',
            dest: '<%%= yeogurt.server %>/',
            src: ['*.swig'],
            ext: '.html'
        },
        dist: {
            expand: true,
            cwd: '<%%= yeogurt.dev %>/views/',
            dest: '<%%= yeogurt.dist %>/',
            src: ['*.swig'],
            ext: '.html'
        }
    });

    // grunt.loadNpmTasks('grunt-swig-templates');
};