// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('copy', {<% if (useKss && cssOption !== 'css') { %>
    serve: {
      files: [{
         expand: true,
          cwd: '<%%= yeogurt.directories.source %>/',
          dest: '<%%= yeogurt.directories.temporary %>/',
          src: [
            '**/*',
            '!**/\_*/**',
            '!**/*.{scss,sass,jade,swig,less,styl}'
          ]
        }]
    },<% } %>
    build: {
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.directories.source %>/',
        dest: '<%%= yeogurt.directories.destination %>/',
        src: [
          '**/*',
          '!**/\_*/**',
          '!**/*.{scss,sass,jade,swig,less,styl}'
        ]
      }<% if (useServer && singlePageApplication) { %>, {
        expand: true,
        cwd: '<%%= yeogurt.directories.server %>/templates/',
        dest: '<%%= yeogurt.directories.temporary %>',
        src: [
          'index.html'
        ]
      }<% } %><% if (useServer) { %>, {
        expand: true,
        cwd: './',
        dest: '<%%= yeogurt.directories.destination %>/',
        src: [
          '<%%= yeogurt.directories.server %>/**/*',
          'server.js',
          'package.json'
        ]
      }<% } %>]
    }
  });

};

module.exports = taskConfig;
