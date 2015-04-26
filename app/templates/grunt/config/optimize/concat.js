// Configuration for Concatenation task(s)
// Concatenates files together
'use strict';

var processConfig = require('../../helpers/vendor-loader');

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('concat', {
    server: {
      files: processConfig('temporary', yeogurt)
    },
    dist: {
      files: processConfig('destination', yeogurt, 'styles')
    }
  });

};

module.exports = taskConfig;
