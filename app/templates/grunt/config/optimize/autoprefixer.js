// Configuration for Autoprefixer task(s)
// Automatically adds vendor prefixes to stylesheets if they are needed
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('autoprefixer', {
    server: {
      options: {
        browsers: ['last 2 versions','ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.tmp %>/styles/*.css',
        dest: '<%%= yeogurt.tmp %>/styles/'
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
        src: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/*.css',
        dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/'
      }]
    }
  });

};

module.exports = taskConfig;
