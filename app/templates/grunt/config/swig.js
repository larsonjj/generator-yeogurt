/**
 * Configuration for swig task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('swig', {<% if (useServer) { %>
        options: {
            data: {
                env: 'development'
            }
        },<% } %><% if (!useServer) { %>
        server: {
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',
            dest: '<%%= yeogurt.staticServer %>/',
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

};

module.exports = taskConfig;
