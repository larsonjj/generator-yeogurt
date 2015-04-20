// Configuration for Knyle Style Sheet task(s)
// Generates styleguide documentation based on stylesheet comments
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('styleguide', {
    options: {

      framework: {
        name: 'kss'
      },

      name: 'Style Guide',

      template: {
        src: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/styleguide'
      }

    },
    server: {
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/styleguide': [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/*.*'
        ]
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/styleguide': [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/*.*'
        ]
      }
    }
  });

};

module.exports = taskConfig;
