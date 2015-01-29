// Configuration for Node Environment task(s)
// Sets up development environment for Node server
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('env', {
    dev: {
      NODE_ENV: 'development'
    },
    test: {
      NODE_ENV: 'test'
    },
    prod: {
      NODE_ENV: 'production'
    },
    all: {
      // Environment variables that are always loaded
    }
  });

};

module.exports = taskConfig;
