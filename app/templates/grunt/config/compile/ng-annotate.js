// Configuration for ngAnnotate task(s)
// Compile angular files to be minification-safe
'use strict';

// Allow the use of non-minsafe DI in AngularJS files.
var taskConfig = function(grunt) {

  grunt.config.set('ngAnnotate', {
    build: {
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.directories.source %>/',
        src: '{<%%= yeogurt.directories.scripts %>,<%%= yeogurt.directories.screens %>,<%%= yeogurt.directories.modules %>}/**/*.js',
        dest: '<%%= yeogurt.directories.destination %>/'
      }]
    }
  });

};

module.exports = taskConfig;
