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
          '<%%= yeogurt.client %>/app/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/app/main.css': '<%%= yeogurt.client %>/{app,modules,lib}/main.{scss,sass}'
      }
    },
    dist: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.css': '<%%= yeogurt.client %>/{app,modules,lib}/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
