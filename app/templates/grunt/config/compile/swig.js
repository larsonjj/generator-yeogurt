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
      options: {
        cache: false
      },
      expand: true,
      cwd: '<%%= yeogurt.client %>/',
      dest: '<%%= yeogurt.tmp %>/',
      src: [
        '**/*.swig',
        '!**/\_*/**'
      ],
      ext: '.html'
    },<% } %>
    dist: {
      options: {
        cache: false
      },
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        '**/*.swig',
        '!**/\_*/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
