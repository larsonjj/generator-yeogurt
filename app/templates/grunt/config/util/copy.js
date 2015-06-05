// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('copy', {
    serve: {
      files: [{
         expand: true,
          cwd: '<%%= yeogurt.directories.source %>/',
          dest: '<%%= yeogurt.directories.temporary %>/',
          src: [
            '**/*',
            '!**/\_*/**'<% if (htmlOption === 'swig') { %>,
            '!**/*.swig'<% } else if (htmlOption === 'jade') { %>,
            '!**/*.jade'<% } %>
          ]
        }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.directories.source %>/',
        dest: '<%%= yeogurt.directories.destination %>/',
        src: [
          '**/*',
          '!**/\_*/**'<% if (htmlOption === 'swig') { %>,
          '!**/*.swig'<% } else if (htmlOption === 'jade') { %>,
          '!**/*.jade'<% } %>
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
