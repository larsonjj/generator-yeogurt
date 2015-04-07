// Configuration for Autoprefixer task(s)
// Automatically adds vendor prefixes to stylesheets if they are needed
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('autoprefixer', {
    server: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.tmp %>/**/*.css',
        dest: '<%%= yeogurt.tmp %>/'
      }]
    },
    dist: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>**/*.css',
        dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>'
      }]
    }
  });

};

module.exports = taskConfig;
