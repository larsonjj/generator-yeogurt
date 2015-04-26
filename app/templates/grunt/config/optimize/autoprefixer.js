// Configuration for Autoprefixer task(s)
// Automatically adds vendor prefixes to stylesheets if they are needed
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('autoprefixer', {
    serve: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles %>/**/*.css',
        dest: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/'
      }]
    },
    build: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles %>/**/*.css',
        dest: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/'
      }]
    }
  });

};

module.exports = taskConfig;
