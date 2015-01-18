/**
 * Configuration for uglify task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('uglify', {
    generated: {
      options: {
        mangle: true,
        preserveComments: 'some',<% if (jsOption === 'none') { %>
        sourceMap: true,
        sourceMapIncludeSources: true<% if (jsFramework !== 'angular') { %>,
        sourceMapIn: '<%%= yeogurt.tmp %>/concat/scripts/main.js.map'<% } %><% } %>
      }
    }<% if (jsOption === 'requirejs') { %>,
    dist: {
      options: {
        mangle: true,
        preserveComments: 'some',
        sourceMap: true,
        sourceMapIncludeSources: true
      },
      expand: true,
      cwd: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>bower_components/',
      dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>bower_components/',
      src: [
        'requirejs/require.js'
      ],
      ext: '.js'
    }<% } %>
  });

};

module.exports = taskConfig;
