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
      cwd: '<%%= yeogurt.directories.source %>/',
      dest: '<%%= yeogurt.directories.temporary %>/',
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
      cwd: '<% if (useServer) { %><%%= yeogurt.directories.server %><% } %><% if (!useServer) { %><%%= yeogurt.directories.source %>/<% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.directories.destination %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.directories.temporary %>/',<% } %>
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
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jade'
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
        '<%%= yeogurt.directories.destination %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jade'
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
        '<%%= yeogurt.directories.temporary %>/test/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jade'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
