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
    serve: {
      options: {
        cache: false
      },
      expand: true,
      cwd: '<%%= yeogurt.directories.source %>/',
      dest: '<%%= yeogurt.directories.temporary %>/',
      src: [
        '**/*.swig',
        '!**/\_*/**'
      ],
      ext: '.html'
    },<% } %>
    build: {
      options: {
        cache: false
      },
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.directories.server %><% } %><% if (!useServer) { %><%%= yeogurt.directories.source %><% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.directories.destination %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.directories.temporary %>/',<% } %>
      src: [
        '**/*.swig',
        '!**/\_*/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
