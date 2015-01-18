/**
 * Configuration for open task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('open', {
    server: {
      url: 'http://localhost:9010/'
    }
  });

};

module.exports = taskConfig;
