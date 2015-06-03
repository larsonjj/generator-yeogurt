// Configuration for BrowserSync task(s)
// Boots up a server that loads up all static files
// Enables livereload
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('browserSync', {
    options: {
      notify: false,
      background: true,
      host: yeogurt.host,
      port: yeogurt.port
    },
    serve: {
      options: {
        files: [
          '<%%= yeogurt.directories.source %>/*.{ico,png,txt,html}',
          '<%%= yeogurt.directories.temporary %>/**/*.html',
          '<%%= yeogurt.directories.temporary %>/**/*.{css,ttf,otf,woff,svg,eot}',
          '<%%= yeogurt.directories.temporary %>/**/*.js',
          '<%%= yeogurt.directories.source %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        startPath: yeogurt.baseUrl,
        server: {
          baseDir: yeogurt.directories.temporary,
          routes: (function(yeogurt) {
            var routes = {};

            // Map base URL to routes
            routes[yeogurt.baseUrl] = yeogurt.directories.temporary;

            return routes;
          })(yeogurt)
        }
      }
    },
    build: {
      options: {
        background: false,
        startPath: yeogurt.baseUrl,
        server: {
          baseDir: '<%%= yeogurt.directories.destination %>',
          routes: (function(yeogurt) {
            var routes = {};

            // Map base URL to routes
            routes[yeogurt.baseUrl] = yeogurt.directories.destination;

            return routes;
          })(yeogurt)
        }
      }
    }
  });

};

module.exports = taskConfig;
