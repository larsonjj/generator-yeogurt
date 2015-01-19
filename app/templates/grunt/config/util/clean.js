// Configuration for Clean task(s)
// Deletes specified folders/files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('clean', {
    dist: ['<%%= yeogurt.dist %>'],
    tmp: ['<%%= yeogurt.tmp %>']
  });

};

module.exports = taskConfig;
