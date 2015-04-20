// Configuration for Clean task(s)
// Deletes specified folders/files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('clean', {
    dist: ['<%%= yeogurt.directories.destination %>'],
    tmp: ['<%%= yeogurt.directories.temporary %>']
  });

};

module.exports = taskConfig;
