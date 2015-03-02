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
      '<%%= yeogurt.client %>/app/**/*.js',
      '!<%%= yeogurt.client %>/app/vendor/**/*.js'
    ]
  });

};

module.exports = taskConfig;
