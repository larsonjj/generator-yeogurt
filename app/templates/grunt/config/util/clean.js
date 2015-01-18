/**
 * Configuration for clean task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('clean', {
    dist: ['<%%= yeogurt.dist %>'],
    tmp: ['<%%= yeogurt.tmp %>']
  });

};

module.exports = taskConfig;
