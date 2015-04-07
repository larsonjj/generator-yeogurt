// Configuration for jade task(s)<% if (singlePageApplication) { %>
// Compile jade templates to single `.js` file
// using the JST namespace (accessible via window.JST)<% } else { %>
// Compile jade templates into HTML<% } %>
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jade', {<% if (!useServer && jsTemplate !== 'jade') { %>
    server: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: true
        }
      },
      expand: true,
      cwd: '<%%= yeogurt.client %>/',
      dest: '<%%= yeogurt.tmp %>/',
      src: [
        '**/*.jade',
        '!**/\_*/**'
      ],
      ext: '.html'
    },<% } %><% if (jsTemplate !== 'jade') { %>
    dist: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false<% if (useServer) { %>,
          env: 'development'<% } %>
        }
      },
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        '**/*.jade',
        '!**/\_*/**'
      ],
      ext: '.html'
    }<% } %><% if (jsTemplate === 'jade') { %>
    server: {
      options: {
        pretty: true,
        client: true,
        data: {
          debug: true
        }
      },
      files: {
        '<%%= yeogurt.tmp %>/templates.js': [
          '<%%= yeogurt.client %>/**/*.jade',
          '<%%= yeogurt.client %>/!**/\_*/**'
        ]
      }
    },
    dist: {
      options: {
        pretty: false,
        client: true,
        data: {
          debug: false
        }
      },
      files: {
        '<%%= yeogurt.tmp %>/templates.js': [
          '<%%= yeogurt.client %>/**/*.jade',
          '<%%= yeogurt.client %>/!**/\_*/**'
        ]
      }
    }<% } %><% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        pretty: true,
        client: true,
        data: {
          debug: true
        }
      },
      files: {
        '<%%= yeogurt.tmp %>/test/templates.js': [
          '<%%= yeogurt.client %>/**/*.jade',
          '<%%= yeogurt.client %>/!**/\_*/**'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
