// Configuration for Uglify task(s)
// Minifies JavaScript files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('uglify', {<% if (jsOption === 'requirejs') { %>
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
