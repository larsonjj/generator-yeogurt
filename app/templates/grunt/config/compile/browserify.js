// Configuration for browserify task(s)
// Compiles JavaScript into single bundle file
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('browserify', {
    server: {
      options: {<% if (jsFramework === 'react') { %>
        transform:  [require('grunt-react').browserify],<% } %>
        browserifyOptions: {
          debug: true
        },
        watch: true
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.scripts.replace(/^_/, "") %>/main.js': [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.scripts %>/main.js'
        ]
      }
    },
    dist: {
      options: {
        transform: [
          require('envify')<% if (jsFramework === 'react') { %>,
          require('grunt-react').browserify<% } %>
        ],
        browserifyOptions: {
          debug: true
        },
        preBundleCB: function(b) {
          // Minify code
          return b.plugin('minifyify', {
            map: 'main.js.map',
            output: yeogurt.directories.destination + '/' + yeogurt.directories.scripts.replace(/^_/, '') + '/main.js.map'
          });
        }
      },
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.scripts.replace(/^_/, "") %>/main.js': [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.scripts %>/main.js'
        ]
      }
    },<% if (useTesting) { %>
    test: {
      options: {<% if (jsFramework === 'react') { %>
        transform:  [require('grunt-react').browserify],<% } %>
        browserifyOptions: {
          debug: true
        },
        watch: true
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.scripts.replace(/^_/, "") %>/bundle.js': ['<%%= yeogurt.directories.source %>/**/*.spec.js']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
