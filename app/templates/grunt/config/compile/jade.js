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
      cwd: '<%%= yeogurt.client %>/templates/',
      dest: '<%%= yeogurt.tmp %>/',
      src: ['**/*.jade'],
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
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/templates/',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: ['**/*.jade'],
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
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/templates/**/*.jade']
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
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/templates/**/*.jade']
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
        'test/scripts/templates.js': ['<%%= yeogurt.client %>/templates/**/*.jade']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
