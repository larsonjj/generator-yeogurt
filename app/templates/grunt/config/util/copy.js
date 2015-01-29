// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('copy', {<% if (useKss && cssOption !== 'css') { %>
    server: {
      files: [{
         expand: true,
          cwd: '<%%= yeogurt.client %>/',
          dest: '<%%= yeogurt.tmp %>',
          src: [
            'styles/styleguide.md'
          ]
        }]
    },<% } %>
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.client %>/',
        dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>',
        src: [<% if (jsOption === 'requirejs') { %>
          'bower_components/requirejs/require.js',<% } %><% if (useDashboard) { %>
          'dashboard/**/*.*',<% } %><% if (useKss) { %>
          'app/styleguide.md',
          'docs/styleguide/public/images',<% } %>
          'assets/fonts/**/*.{woff,otf,ttf,eot,svg}',
          'assets/images/**/*.{webp}',
          '!*.js',
          '*.{ico,png,txt}'<% if (singlePageApplication) { %>,
          '*.html'<% } %>
        ]
      }<% if (useServer && singlePageApplication) { %>, {
        expand: true,
        cwd: '<%%= yeogurt.server %>/templates/',
        dest: '<%%= yeogurt.tmp %>',
        src: [
          'index.html'
        ]
      }<% } %><% if (useServer) { %>, {
        expand: true,
        cwd: './',
        dest: '<%%= yeogurt.dist %>/',
        src: [
          '<%%= yeogurt.server %>/**/*',
          'server.js',
          'package.json'
        ]
      }<% } %>]
    }
  });

};

module.exports = taskConfig;
