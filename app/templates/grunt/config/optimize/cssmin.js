// Configuration for CSSMin task(s)
// Minifies CSS files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('cssmin', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.directories.destination %>/',
        src: [
          '**/*.css'
        ],
        dest: '<%%= yeogurt.directories.destination %>/'
      }]
    }
  });

};

module.exports = taskConfig;
