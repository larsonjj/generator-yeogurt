// Configuration for Sass task(s)
// Compile Sass stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('sass', {
    serve: {
      options: {
        precision: 10,
        outputStyle: 'nested',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.directories.source %>'
        ]
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.{scss,sass}'
      }
    },
    build: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.directories.source %>'
        ]
      },
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
