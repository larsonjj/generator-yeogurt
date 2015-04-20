// Configuration for Express task(s)
// Boots up Node server with specified environment variables
// and server script
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('express', {
    options: {
      port: process.env.PORT || 9010
    },
    server: {
      options: {
        script: '<%%= yeogurt.directories.server %>/server.js',
        node_env: 'development',
        debug: true
      }
    },
    dist: {
      options: {
        script: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.server %>/server.js',
        node_env: 'production'
      }
    }
  });

};

module.exports = taskConfig;
