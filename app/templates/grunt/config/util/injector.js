// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    },<% if (htmlOption === 'jade') { %>
    // Inject application script files into index.html (doesn't include bower)
    jade: {
      options: {
        transform: function(filePath) {<% if (useServer) { %>
          filePath = filePath.replace('/server/templates/', '../');
          <% } else { %>
          filePath = filePath.replace('/client/templates/', '../');<% } %>
          return 'include ' + filePath;
        },
        starttag: '//- [injector:jade]',
        endtag: '//- [endinjector]'
      },
      files: {<% if (useServer) { %>
        '<%%= yeogurt.server %>/app/layout/base.jade'<% } else { %>
        '<%%= yeogurt.client %>/app/layout/base.jade'<% } %>: [
          '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/modules/*.jade',
        ]
      }
    },<% } %><% if (htmlOption === 'swig') { %>
    // Inject application script files into index.html (doesn't include bower)
    swig: {
      options: {
        transform: function(filePath) {<% if (useServer) { %>
          filePath = filePath.replace('/server/templates/', '../');
          <% } else { %>
          filePath = filePath.replace('/client/templates/', '../');<% } %>
          var fileName = filePath.substring(filePath.lastIndexOf('/')+1).slice(0, -5);
          return '{% import "' + filePath + '" as ' + _str.camelize(fileName) + ' %}';
        },
        starttag: '{# [injector:swig] #}',
        endtag: '{# [endinjector] #}'
      },
      files: {<% if (useServer) { %>
        '<%%= yeogurt.server %>/app/layout/base.swig'<% } else { %>
        '<%%= yeogurt.client %>/app/layout/base.swig'<% } %>: [
          '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/modules/*.swig',
        ]
      }
    },<% } %><% if (jsOption === 'none') { %>
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
        '<%%= yeogurt.server %>/app/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } else { %>
        '<%%= yeogurt.client %>/app/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } %>: [
          '<%%= yeogurt.client %>/app/**/*.js',
          '!<%%= yeogurt.client %>/app/main.js',
          '!<%%= yeogurt.client %>/app/**/*.spec.js',
          '!<%%= yeogurt.client %>/app/**/*.mock.js',
          '!<%%= yeogurt.client %>/app/main.js'<% if (singlePageApplication) { %>,<% if (jsFramework === 'backbone' && jsOption === 'none') { %>
          '!<%%= yeogurt.client %>/app/layout/base.js',<% } %><% if (jsFramework !== 'angular') { %>
          '!<%%= yeogurt.client %>/app/routes.js'<% } %><% } %>
        ]
      }
    },<% } %><% if (cssOption === 'less') { %>
    // Inject component less into main.less
    less: {
      options: {
        transform: function(filePath) {<% if (jsFramework === 'angular') { %>
          if (filePath.indexOf('app') > -1) {
            filePath = filePath.replace('/client/', '../');
          }
          else {
            filePath = filePath.replace('/client/app/', '');
          }<% } else { %>
          filePath = filePath.replace('/client/app/', '');<% } %>
          return '@import \'' + filePath + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%%= yeogurt.client %>/app/main.less': [
          '<%%= yeogurt.client %>/app/**/*.less',
          '!<%%= yeogurt.client %>/app/main.less'
        ]
      }
    },<% } %><% if (cssOption === 'sass') { %>
    // Inject component scss into main.scss
    sass: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/app/', '');
          <% if (sassSyntax === 'scss') { %>
          return '@import \'' + filePath.slice(0, -5) + '\';';<% } else { %>
          return '@import ' + filePath.slice(0, -5);<% } %>
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {<% if (sassSyntax === 'scss') { %>
        '<%%= yeogurt.client %>/app/main.scss': [
          '<%%= yeogurt.client %>/app/**/*.scss',
          '!<%%= yeogurt.client %>/app/main.scss'
        ]<% } else { %>
        '<%%= yeogurt.client %>/app/main.sass': [
          '<%%= yeogurt.client %>/app/**/*.sass',
          '!<%%= yeogurt.client %>/app/main.sass'
        ]<% } %>
      }
    },<% } %><% if (cssOption === 'stylus') { %>
    // Inject component scss into main.scss
    stylus: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/app/', '');
          return '@import \'' + filePath.slice(0, -5) + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%%= yeogurt.client %>/app/main.styl': [
          '<%%= yeogurt.client %>/app/**/*.styl',
          '!<%%= yeogurt.client %>/app/main.styl'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/**/*.styl'<% } %>
        ]
      }
    },<% } %><% if (cssOption === 'css') { %>
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
        '<%%= yeogurt.server %>/app/<% if (htmlOption === 'jade') { %>layout/base.jade<% } else if (htmlOption === 'swig') { %>layout/base.swig<% } %>'<% } else { %>
        '<%%= yeogurt.client %>/<% if (htmlOption === 'jade') { %>app/layout/base.jade<% } else if (htmlOption === 'swig') { %>templates//layouts/base.swig<% } %>'<% } %>: [
          '<%%= yeogurt.client %>/app/**/*.css',
          '!<%%= yeogurt.client %>/app/main.css'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
