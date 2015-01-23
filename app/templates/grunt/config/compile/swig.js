// Configuration for swig task(s)
// Compile swig templates into HTML
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
      src: [
        '**/*.swig',
        '!**/layouts/**'
      ],
      ext: '.html'
    },<% } %>
    dist: {
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/templates/',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        '**/*.swig',
        '!**/layouts/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
