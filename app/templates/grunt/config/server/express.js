/**
 * Configuration for express server task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('express', {
    options: {
      port: process.env.PORT || 9010
    },
    server: {
      options: {
        script: 'server.js',
        node_env: 'development',
        debug: true
      }
    },
    dist: {
      options: {
        script: 'dist/server.js',
        node_env: 'production'
      }
    }
  });

};

module.exports = taskConfig;
