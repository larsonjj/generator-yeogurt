// Configuration for Autoprefixer task(s)
// Automatically adds vendor prefixes to stylesheets if they are needed
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('postcss', {
    serve: {
      options: {
        // Target browsers IE9 and up
        processors: [
        require('autoprefixer-core')({browsers: 'ie >= 9'})
      ],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/**/*.css',
        dest: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/'
      }]
    },
    build: {
      options: {
        processors: [
        require('autoprefixer-core')({browsers: 'ie >= 9'})
      ],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/**/*.css',
        dest: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/'
      }]
    }
  });

};

module.exports = taskConfig;
