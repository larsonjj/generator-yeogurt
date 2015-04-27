// Configuration for Concatenation task(s)
// Concatenates files together
'use strict';

var processConfig = require('../../helpers/process-loader');

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('concat', {
    serve: {
      files: processConfig('temporary', yeogurt)
    },
    build: {
      files: processConfig('destination', yeogurt, 'styles')
    }
  });

};

module.exports = taskConfig;
