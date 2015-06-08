// Configuration for jade task(s)<% if (singlePageApplication) { %>
// Compile jade templates to single `.js` file
// using the JST namespace (accessible via window.JST)<% } else { %>
// Compile jade templates into HTML<% } %>
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('jade', {
    serve: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: true,
          yeogurt: yeogurt
        }
      },
      expand: true,
      cwd: '<%%= yeogurt.directories.source %>/',
      dest: '<%%= yeogurt.directories.temporary %>/',
      src: [
        '**/*.jade',
        '!**/\_*/**'
      ],
      ext: '.html'
    },
    build: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false,
          yeogurt: yeogurt,
        }
      },
      expand: true,
      cwd: '<%%= yeogurt.directories.source %>/',
      dest: '<%%= yeogurt.directories.destination %>/'
      src: [
        '**/*.jade',
        '!**/\_*/**'
      ],
      ext: '.html'
    }
  });

};

module.exports = taskConfig;
