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
      cwd: '<%%= yeogurt.client %>/app/index',
      dest: '<%%= yeogurt.tmp %>/',
      src: [
        '**/index.jade',
        '../**/!(index).jade',
        '!../**/layout/**'
      ],
      ext: '.html'
    },<% } %><% if (jsTemplate !== 'jade') { %>
    dist: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false<% if (useServer) { %>,
          env: 'development',
          messages: {} // Avoid errors with navbar<% } %>
        }
      },
      expand: true,
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/app/index/',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        '**/index.jade',
        '../**/!(index).jade',
        '!../**/layout/**'
      ],
      ext: '.html'
    },<% } %><% if (jsTemplate === 'jade') { %>
    server: {
      options: {
        pretty: true,
        client: true,
        data: {
          debug: true
        }
      },
      files: {
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/app/**/*.jade']
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
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/app/**/*.jade']
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
        '<%%= yeogurt.tmp %>/test/templates.js': ['<%%= yeogurt.client %>/app/**/*.jade']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
