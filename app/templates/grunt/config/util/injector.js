// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    }<% if (htmlOption === 'jade') { %>,
    // Inject application script files into index.html (doesn't include bower)
    jade: {
      options: {
        transform: function(filePath) {<% if (useServer) { %>
          filePath = filePath.replace('/server/', '../');<% } else { %>
          filePath = filePath.replace('/client/', '../');<% } %>
          return 'include ' + filePath;
        },
        starttag: '//- [injector:jade]',
        endtag: '//- [endinjector]'
      },
      files: {<% if (useServer) { %>
        '<%%= yeogurt.server %>/layout/base.jade'<% } else { %>
        '<%%= yeogurt.client %>/layout/base.jade'<% } %>: [
          '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/modules/**/*.jade'
        ]
      }
    }<% } %><% if (htmlOption === 'swig') { %>,
    // Inject application script files into index.html (doesn't include bower)
    swig: {
      options: {
        transform: function(filePath) {<% if (useServer) { %>
          filePath = filePath.replace('/server/', '../');<% } else { %>
          filePath = filePath.replace('/client/', '../');<% } %>
          var fileName = filePath.substring(filePath.lastIndexOf('/')+1).slice(0, -5);
          return '{% import "' + filePath + '" as ' + _str.camelize(fileName) + ' %}';
        },
        starttag: '{# [injector:swig] #}',
        endtag: '{# [endinjector] #}'
      },
      files: {<% if (useServer) { %>
        '<%%= yeogurt.server %>/layout/base.swig'<% } else { %>
        '<%%= yeogurt.client %>/layout/base.swig'<% } %>: [
          '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/modules/**/*.swig'
        ]
      }
    }<% } %><% if (jsOption === 'none') { %>,
    // Inject application script files into index.html (doesn't include bower)
    scripts: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');
          return '<script src="/' + filePath + '"></script>';
        },<% if (htmlOption === 'jade') { %>
        starttag: '// [injector:js]',
        endtag: '// [endinjector]'<% } else { %>
        starttag: '<!-- [injector:js] -->',
        endtag: '<!-- [endinjector] -->'<% } %>
      },
      files: {<% if (singlePageApplication) { %>
        '<%%= yeogurt.client %>/index.html'<% } else if (useServer) { %>
        '<%%= yeogurt.server %>/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } else { %>
        '<%%= yeogurt.client %>/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } %>: [
          '<%%= yeogurt.client %>/**/*.js',
          '!<%%= yeogurt.client %>/main.js',
          '!<%%= yeogurt.client %>/**/*.spec.js',
          '!<%%= yeogurt.client %>/**/*.mock.js',
          '!<%%= yeogurt.client %>/main.js'<% if (singlePageApplication) { %>,<% if (jsFramework === 'backbone' && jsOption === 'none') { %>
          '!<%%= yeogurt.client %>/layout/base.js',<% } %><% if (jsFramework !== 'angular') { %>
          '!<%%= yeogurt.client %>/routes.js'<% } %><% } %>
        ]
      }
    }<% } %><% if (cssOption === 'less') { %>,
    // Inject component less into main.less
    less: {
      options: {
        transform: function(filePath) {<% if (jsFramework === 'angular') { %>
          if (filePath.indexOf('app') > -1) {
            filePath = filePath.replace('/client/', '../');
          }
          else {
            filePath = filePath.replace('/client/', '');
          }<% } else { %>
          filePath = filePath.replace('/client/', '');<% } %>
          return '@import \'' + filePath + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
          '<%%= yeogurt.client %>/main.less': [
          '<%%= yeogurt.client %>/**/*.less',
          '!<%%= yeogurt.client %>/main.less'
        ]
      }
    }<% } %><% if (cssOption === 'sass') { %>,
    // Inject component scss into main.scss
    sass: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');<% if (sassSyntax === 'scss') { %>
          return '@import \'' + filePath.slice(0, -5) + '\';';<% } else { %>
          return '@import ' + filePath.slice(0, -5);<% } %>
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {<% if (sassSyntax === 'scss') { %>
          '<%%= yeogurt.client %>/main.scss': [
          '<%%= yeogurt.client %>/**/*.scss',
          '!<%%= yeogurt.client %>/main.scss'
        ]<% } else { %>
          '<%%= yeogurt.client %>/main.sass': [
          '<%%= yeogurt.client %>/**/*.sass',
          '!<%%= yeogurt.client %>/main.sass'
        ]<% } %>
      }
    }<% } %><% if (cssOption === 'stylus') { %>,
    // Inject component scss into main.scss
    stylus: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');
          return '@import \'' + filePath.slice(0, -5) + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
          '<%%= yeogurt.client %>/main.styl': [
          '<%%= yeogurt.client %>/**/*.styl',
          '!<%%= yeogurt.client %>/main.styl'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/**/*.styl'<% } %>
        ]
      }
    }<% } %><% if (cssOption === 'css') { %>,
    // Inject component css into index.html
    css: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');<% if (htmlOption === 'jade') { %>
          return 'link(rel=\'stylesheet\', href=\'/' + filePath + '\')';<% } else { %>
          return '<link rel="stylesheet" href="/' + filePath + '">';<% } %>
        },<% if (htmlOption === 'jade') { %>
        starttag: '// [injector:css]',
        endtag: '// [endinjector]'<% } else { %>
        starttag: '<!-- [injector:css] -->',
        endtag: '<!-- [endinjector] -->'<% } %>
      },
      files: {<% if (singlePageApplication) { %>
        '<%%= yeogurt.client %>/index.html'<% } else if (useServer) { %>
        '<%%= yeogurt.server %>/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } else { %>
        '<%%= yeogurt.client %>/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>templates//layouts/base.swig<% } %>'<% } %>: [
          '<%%= yeogurt.client %>/**/*.css',
          '!<%%= yeogurt.client %>/main.css'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
