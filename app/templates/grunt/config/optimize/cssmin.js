// Configuration for CSSMin task(s)
// Minifies CSS files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('cssmin', {
    options: {
      sourceMap: true
    }
  });

};

module.exports = taskConfig;
