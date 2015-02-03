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
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/app/main.css': '<%%= yeogurt.client %>/{app,modules,lib}/main.styl'
      }
    },
    dist: {
      options: {
        compress: true,
        sourcemap: false, // not supported yet
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/{app,modules,lib}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.css': '<%%= yeogurt.client %>/{app,modules,lib}/main.styl'
      }
    }
  });

};

module.exports = taskConfig;
