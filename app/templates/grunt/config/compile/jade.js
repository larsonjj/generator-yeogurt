// Configuration for jade task(s)<% if (singlePageApplication) { %>
// Compile jade templates to single `.js` file
// using the JST namespace (accessible via window.JST)<% } else { %>
// Compile jade templates into HTML<% } %>
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jade', {<% if (!useServer && jsTemplate !== 'jade') { %>
    serverIndex: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: true
        }
      },
      files: {
        '<%%= yeogurt.tmp %>/index.html': ['<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/app/index/index.jade']
      }
    },
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
        'app/**/*.jade',
        '!**/layout/**',
        '!**/index/**'
      ],
      ext: '.html'
    },<% } %><% if (jsTemplate !== 'jade') { %>
    distIndex: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false
        }
      },
      files: {
        '<%%= yeogurt.dist %>/index.html': ['<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>/app/index/index.jade']
      }
    },
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
      cwd: '<% if (useServer) { %><%%= yeogurt.server %><% } %><% if (!useServer) { %><%%= yeogurt.client %><% } %>',<% if (!useServer) { %>
      dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
      dest: '<%%= yeogurt.tmp %>/',<% } %>
      src: [
        'app/**/*.jade',
        '!**/layout/**',
        '!**/index/**'
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
