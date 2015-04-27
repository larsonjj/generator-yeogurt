// Configuration for Uglify task(s)
// Minifies JavaScript files
'use strict';

var processConfig = require('../../helpers/process-loader');

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('uglify', {
    build: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      },
      files: processConfig('destination', yeogurt, 'scripts')
    }
  });

};

module.exports = taskConfig;
