// Configuration for RequireJS task(s)
// Compile JS files to single bundle file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('requirejs', {
    build: {
      options: {
        name: 'main',
        baseUrl: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.scripts %>/',
        mainConfigFile: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.scripts %>/main.js',
        out: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.scripts.replace(/^_/, "") %>/main.js',
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false
      }
    }
  });

};

module.exports = taskConfig;
