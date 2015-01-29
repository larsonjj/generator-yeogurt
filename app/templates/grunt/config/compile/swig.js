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
      cwd: '<%%= yeogurt.client %>/app/index',
      dest: '<%%= yeogurt.tmp %>/',
      src: [
        '**/index.swig',
        '../**/!(index).swig',
        '!../**/layout/**'
      ],
      ext: '.html'
    },<% } %>
    dist: {
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/app/index',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        '**/index.swig',
        '../**/!(index).swig',
        '!../**/layout/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
