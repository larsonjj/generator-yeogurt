  /**
 * Configuration for Require task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('requirejs', {
    dist: {
      options: {
        name: 'main',
        baseUrl: '<%%= yeogurt.client %>/scripts/',
        mainConfigFile: '<%%= yeogurt.client %>/scripts/main.js',
        out: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>scripts/main.js',
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false
      }
    }
  });

};

module.exports = taskConfig;
