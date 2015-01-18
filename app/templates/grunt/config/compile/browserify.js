/**
 * Configuration for browserify task(s)
 */
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
        '<%%= yeogurt.tmp %>/scripts/main.js': ['<%%= yeogurt.client %>/scripts/main.js']
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
            output: 'dist/<% if (useServer) { %>client/<% } %>scripts/main.js.map'
          });
        }
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>scripts/main.js': ['<%%= yeogurt.client %>/scripts/main.js']
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
        'test/scripts/bundle.js': ['test/spec/**/*.spec.js']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
