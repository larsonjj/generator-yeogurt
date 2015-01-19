// Configuration for Stylus task(s)
// Compile Stylus stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('stylus', {
    server: {
      options: {
        compress: false,
        sourcemap: false, // not supported yet
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/styles/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.styl'
      }
    },
    dist: {
      options: {
        compress: true,
        sourcemap: false, // not supported yet
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/styles/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/main.css': '<%%= yeogurt.client %>/styles/main.styl'
      }
    }
  });

};

module.exports = taskConfig;
