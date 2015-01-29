// Configuration for Sass task(s)
// Compile Sass stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('sass', {
    server: {
      options: {
        precision: 10,
        outputStyle: 'nested',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/styles/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/app/main.css': '<%%= yeogurt.client %>/app/main.{scss,sass}'
      }
    },
    dist: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/app/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.css': '<%%= yeogurt.client %>/app/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
