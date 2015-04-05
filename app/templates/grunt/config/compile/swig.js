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
    serverIndex: {
      options: {
        cache: false
      },
      files: {
        '<%= yeogurt.tmp %>/index.html': ['<%= yeogurt.client %>/app/index/index.swig']
      }
    },
    server: {
      options: {
        cache: false
      },
      expand: true,
      cwd: '<%= yeogurt.client %>/',
      dest: '<%= yeogurt.tmp %>/',
      src: [
        'app/**/*.swig',
        '!**/layout/**',
        '!**/index/**'
      ],
      ext: '.html'
    },<% } %>
    distIndex: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false
        }
      },
      files: {
        '<%= yeogurt.dist %>/index.html': ['<%= yeogurt.client %>/app/index/index.swig']
      }
    },
    dist: {
      options: {
        cache: false
      },
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        'app/**/*.swig',
        '!**/layout/**',
        '!**/index/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
