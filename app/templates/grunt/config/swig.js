/**
 * Configuration for swig task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('swig', {<% if (useServer) { %>
        options: {
            data: {
                env: 'development'
            }
        },<% } %><% if (!useServer) { %>
        server: {
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',
            dest: '<%%= yeogurt.server %>/',
            src: ['*.swig'],
            ext: '.html'
        },<% } %>
        dist: {
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',<% if (!useServer) { %>
            dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
            dest: '.tmp/',<% } %>
            src: ['*.swig'],
            ext: '.html'
        }
    });

    // grunt.loadNpmTasks('grunt-swig-templates');
};