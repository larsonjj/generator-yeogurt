// Configuration for Dashboard task(s)
// Generates dashboard documentation based on markup comments
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');

  grunt.config.set('dashboard', {
    serve: {
      options: {<% if (htmlOption === 'jade') { %>
        compiler: require('jade'),
        compilerOptions: {pretty: true, filename: true},<% } else if (htmlOption === 'swig') { %>
        compiler: require('swig'),
        compilerOptions: {filename: true},<% } %>
        dashTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/template.hbs',
        moduleTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/module-template.hbs',
        logo: yeogurt.directories.images.replace(/^_/, '') + '/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/generated',
        data: {
          scripts: yeogurt.directories.scripts.replace('_', ''),
          styles: yeogurt.directories.styles.replace('_', '')
        },
        includes: [{
          cwd: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/index.html': [
          '<%%= yeogurt.directories.source %>/**/*.dash.{json,<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>}'
        ]
      }
    },
    build: {
      options: {<% if (htmlOption === 'jade') { %>
        compiler: require('jade'),
        compilerOptions: {pretty: true, filename: true},<% } else if (htmlOption === 'swig') { %>
        compiler: require('swig'),
        compilerOptions: {filename: true},<% } %>
        dashTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/template.hbs',
        moduleTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/module-template.hbs',
        logo: yeogurt.directories.images.replace(/^_/, '') + '/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/generated',
        data: {
          scripts: yeogurt.directories.scripts.replace('_', ''),
          styles: yeogurt.directories.styles.replace('_', '')
        },
        includes: [{
          cwd: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/index.html': [
          '<%%= yeogurt.directories.source %>/**/*.dash.{json,<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>}'
        ]
      }
    }
  });

};

module.exports = taskConfig;
