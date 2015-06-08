// Configuration for Watch task(s)
// Runs specified tasks when file changes are detected
'use strict';
<% if (useDashboard) { %>
var _ = require('lodash');<% } %>

var taskConfig = function(grunt) {

  var config = {
    configFiles: {
      files: [
        'grunt/**/*.js',
        '*.{json,js}'
      ],
      options: {
        reload: true,
        interrupt: true
      },
      tasks: [
        'serve:nowatch'
      ]
    },
    images: {
      files: [
        '<%%= yeogurt.directories.images %>/**/*.{jpg,jpeg,gif,png,svg}',
      ],
      tasks: [
        'newer:imagemin:serve'
      ]
    },
    copy: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*',
        '!<%%= yeogurt.directories.source %>/**/\_*/**',<% if (htmlOption === 'swig') { %>,
        '!<%%= yeogurt.directories.source %>/**/*.swig'<% } else if (htmlOption === 'jade') { %>,
        '!<%%= yeogurt.directories.source %>/**/*.jade'<% } %>
      ],
      tasks: [
        'newer:copy:serve'
      ]
    },<% if (htmlOption === 'jade') { %>
    jade: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.jade',
        '!<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/**/*.jade'
      ],
      tasks: [
        'newer:jade:serve'
      ]
    },
    jadePartials: {
      files: [
        '<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/**/*.jade'
      ],
      tasks: [
        'jade:serve'
      ]
    },<% } %><% if (htmlOption === 'swig') { %>
    swig: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.jade',
        '!<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/**/*.swig'
      ],
      tasks: [
        'newer:swig:serve'
      ]
    },
    swigPartials: {
      files: [
        '<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/**/*.swig'
      ],
      tasks: [
        'swig:serve'
      ]
    },<% } %><% if (jsFramework === 'angular') { %>
    html: {
      files: [
        '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.screens %>/**/*.html',
        '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.modules %>/**/*.html'
      ],
      tasks: [
        'ngtemplates'
      ]
    },<% } %><% if (cssOption === 'sass') { %>
    sass: {
      files: ['<%%= yeogurt.directories.source %>/**/*.{scss,sass}'],
      tasks: [
        'sass:serve',
        'autoprefixer:serve'
      ]
    },<% } %><% if (cssOption === 'less') { %>
    less: {
      files: ['<%%= yeogurt.directories.source %>/**/*.less'],
      tasks: [
        'less:serve',
        'autoprefixer:serve'
      ]
    },<% } %><% if (cssOption === 'stylus') { %>
    stylus: {
      files: ['<%%= yeogurt.directories.source %>/**/*.styl'],
      tasks: [
        'stylus:serve',
        'autoprefixer:serve'
      ]
    },<% } %>
    css: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.css'
      ],
      tasks: [
        'autoprefixer:serve'
      ]
    },
    js: {
      files: [<% if (singlePageApplication) { %>
        '<%%= yeogurt.directories.source %>/+(<%%= yeogurt.directories.screens %>)/**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>',<% } %>
        '<%%= yeogurt.directories.source %>/+(<%%= yeogurt.directories.scripts %>)/**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>',
        '<%%= yeogurt.directories.source %>/+(<%%= yeogurt.directories.modules %>)/**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>'
      ],
      tasks: [
        'newer:eslint'
      ]
    },<% if (jsFramework === 'marionette') { %>
    jst: {
      files: ['<%%= yeogurt.directories.source %>/templates/**/*.jst'],
      tasks: [
        'jst:serve'
      ]
    },<% } %>
    livereload: {
      options: {
        livereload: 35729
      },
      files: [
        '<%%= yeogurt.directories.source %>/*.{ico,png,txt}',<% if (htmlOption === 'swig' || htmlOption === 'jade') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.html',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.html',<% } %><% if (cssOption !== 'css') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.{css,ttf,otf,woff,svg,eot}',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.{css,ttf,otf,woff,svg,eot}',<% } %><% if (jsOption === 'browserify') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>',<% } else { %><% if (jsFramework === 'angular') { %>
        '<%%= yeogurt.directories.source %>/**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>',
        '!<%%= yeogurt.directories.source %>/**/*.{spec,mock}.js',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.js',<% } %><% } %><% if (singlePageApplication && jsFramework !== 'react') { %>
        '<%%= yeogurt.directories.temporary %>/templates/**/*.js',<% } %>
        '<%%= yeogurt.directories.source %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };<% if (useDashboard) { %>

  // Documentation specific configuration
  var docsConfig = {<% if (htmlOption === 'jade' && useDashboard) { %>
    jade: {
      tasks: [
        'dashboard:serve'
      ],
      files: [
        '<%%= yeogurt.directories.source %>/**/*.dash.json'
      ]
    },
    jadePartials: {
      tasks: [
        'dashboard:serve'
      ]
    },<% } %><% if (htmlOption === 'swig' && useDashboard) { %>
    swig: {
      tasks: [
        'dashboard:serve'
      ],
      files: [
        '<%%= yeogurt.directories.source %>/**/*.dash.json'
      ]
    },
    swigPartials: {
      tasks: [
        'dashboard:serve'
      ]
    },<% } %><% if (useDashboard) { %>
    dashboard: {
      files: [
        '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/**/*'
      ],
      tasks: ['dashboard:serve']
    }<% } %>
  };<% } %>

  grunt.config.set('watch', config);<% if (useDashboard) { %>

  grunt.registerTask('listen:docs', function() {
    // Merge docsConfig object with the config object without overwriting arrays
    // Instead concatenate all arrays with each other
    grunt.config('watch', _.merge(config, docsConfig, function(a, b) {
      return _.isArray(a) ? a.concat(b) : undefined;
    }));
    grunt.task.run('watch');
  });<% } %>

};

module.exports = taskConfig;
