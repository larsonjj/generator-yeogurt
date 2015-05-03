// Configuration for Concatenation task(s)
// Concatenates files together
'use strict';

var vendorConfig = require('../../helpers/vendor-loader');

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('concat', {
    serve: {
      files: vendorConfig({
        dir: 'temporary',   // confObj.directories.temporary
        confObj: yeogurt    // configuration object (yeogurt.conf.js)
      })
    },
    build: {
      files: vendorConfig({
        dir: 'destination', // confObj.directories.destination
        type: 'styles',     // restrict processing to specific key (confObj.directories.styles)
        confObj: yeogurt    // configuration object (yeogurt.conf.js)
      })
    }
  });

};

module.exports = taskConfig;
