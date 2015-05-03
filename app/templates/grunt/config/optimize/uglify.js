// Configuration for Uglify task(s)
// Minifies JavaScript files
'use strict';

var vendorConfig = require('../../helpers/vendor-loader');

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = require('../../../yeogurt.conf');

  grunt.config.set('uglify', {
    build: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      },
      files: vendorConfig({
        dir: 'destination', // confObj.directories.destination
        type: 'scripts',     // restrict processing to specific key (confObj.directories.scripts)
        confObj: yeogurt    // configuration object (yeogurt.conf.js)
      })
    }
  });

};

module.exports = taskConfig;
