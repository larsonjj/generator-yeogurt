// Configuration for Concatenation task(s)
// Concatenates files together
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('concat', {
    options: {
      sourceMap: true
    }
  });

};

module.exports = taskConfig;
