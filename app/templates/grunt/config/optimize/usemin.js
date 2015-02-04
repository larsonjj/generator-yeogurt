// Configuration for Usemin task(s)
// Reads base template for usemin blocks to enable smart builds that automatically
// concat and minify files.
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('useminPrepare', {
    html: <% if (!useServer) { %>'<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>/index.html'<% } else { %><% if (htmlOption === 'jade' || htmlOption === 'swig') { %>'<%%= yeogurt.tmp %>/index.html'<% } else { %>'<%%= yeogurt.client %>/index.html'<% } %><% } %>,
    options: {
      root: '<%%= yeogurt.client %>',
      dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client<% } %>'
    }
  });

  grunt.config.set('usemin', {
    html: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>*.html',<% if (cssOption === 'css') { %>
    css: ['<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/**/*.css'],<% } %>
    options: {
      assetsDirs: ['<%%= yeogurt.client %>', '<%%= yeogurt.client %>/images']
    }
  });

};

module.exports = taskConfig;
