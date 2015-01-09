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
            cwd: '<%%= yeogurt.client %>/templates/',
            dest: '<%%= yeogurt.tmp %>/',
            src: ['*.swig'],
            ext: '.html'
        },<% } %>
        dist: {
            expand: true,
            cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/templates/',<% if (!useServer) { %>
            dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
            dest: '<%%= yeogurt.tmp %>/',<% } %>
            src: ['*.swig'],
            ext: '.html'
        }
    });

};

module.exports = taskConfig;
