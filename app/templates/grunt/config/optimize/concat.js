/**
 * Configuration for concat task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('concat', {
    options: {
      sourceMap: true
    }
  });

};

module.exports = taskConfig;
