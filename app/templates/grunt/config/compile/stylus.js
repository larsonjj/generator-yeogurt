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
          '<%%= yeogurt.client %>/app/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/app/main.css': '<%%= yeogurt.client %>/app/main.styl'
      }
    },
    dist: {
      options: {
        compress: true,
        sourcemap: false, // not supported yet
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/app/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.css': '<%%= yeogurt.client %>/app/main.styl'
      }
    }
  });

};

module.exports = taskConfig;
