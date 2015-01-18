/**
 * Configuration for Sass task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('sass', {
    server: {
      options: {
        precision: 10,
        outputStyle: 'nested',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>/styles/'
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.{scss,sass}'
      }
    },
    dist: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>/styles/'
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/main.css': '<%%= yeogurt.client %>/styles/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
