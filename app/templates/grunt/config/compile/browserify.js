// Configuration for browserify task(s)
// Compiles JavaScript into single bundle file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('browserify', {
    server: {
      options: {<% if (jsFramework === 'react') { %>
        transform:  [ require('grunt-react').browserify ],<% } %>
        browserifyOptions: {
          debug: true
        },
        watch: true
      },
      files: {
        '<%%= yeogurt.tmp %>/app/main.js': ['<%%= yeogurt.client %>/app/main.js']
      }
    },
    dist: {
      options: {<% if (jsFramework === 'react') { %>
        transform:  [ require('grunt-react').browserify ],<% } %>
        browserifyOptions: {
          debug: true
        },
        preBundleCB: function(b) {
          // Minify code
          return b.plugin('minifyify', {
            map: 'main.js.map',
            output: 'dist/<% if (useServer) { %>client/<% } %>app/main.js.map'
          });
        }
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.js': ['<%%= yeogurt.client %>/app/main.js']
      }
    },<% if (useTesting) { %>
    test: {
      options: {<% if (jsFramework === 'react') { %>
        transform:  [ require('grunt-react').browserify ],<% } %>
        browserifyOptions: {
          debug: true
        },
        watch: true
      },
      files: {
        '<%%= yeogurt.tmp %>/test/bundle.js': ['<%%= yeogurt.client %>/app/**/*.spec.js']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
