// Configuration for ESLint task(s)
// Runs ESLint on specified files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('eslint', {
    options: {
      configFile: '.eslintrc'
    },
    target: [
      'Gruntfile.js',
      'grunt/**/*.js',
      '<%%= yeogurt.directories.source %>/**/*.js',
      '!<%%= yeogurt.directories.source %>/**/<%%= yeogurt.directories.docs %>/**/*.js'
    ]
  });

};

module.exports = taskConfig;
