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
      '<%= yeogurt.client %>/**/*.js',
      '!<%= yeogurt.client %>/**/vendor/**/*.js'
    ]
  });

};

module.exports = taskConfig;
