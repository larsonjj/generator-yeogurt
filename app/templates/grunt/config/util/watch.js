// Configuration for Watch task(s)
// Runs specified tasks when file changes are detected
'use strict';
<% if (useKss || useJsdoc || useDashboard) { %>
var _ = require('lodash');<% } %>

var taskConfig = function(grunt) {

  var config = {
    configFiles: {
      files: [
        'Gruntfile.js',
        'grunt/**/*.js',
        '*.json'
      ],
      options: {
        reload: true,
        interrupt: true
      },
      tasks: [
        'wiredep',
        'serve:nowatch'
      ]
    },<% if (htmlOption === 'jade' && !useServer) { %>
    jade: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.jade',
        '!<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/*.jade'
      ],
      tasks: [
        'newer:jade:server'
      ]
    },
    jadePartials: {
      files: [
        '<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/*.jade'
      ],
      tasks: [
        'injector:jade',
        'jade:server'
      ]
    },<% } %><% if (htmlOption === 'swig' && !useServer) { %>
    swig: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.jade',
        '!<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/*.swig'
      ],
      tasks: [
        'newer:swig:server'
      ]
    },
    swigPartials: {
      files: [
        '<%%= yeogurt.directories.source %>/**/+(<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.layouts %>)/*.swig'
      ],
      tasks: [
        'injector:swig',
        'swig:server'
      ]
    },<% } %><% if (jsFramework === 'backbone') { %>
    html: {
      files: [
        '<%%= yeogurt.directories.source %>/templates/**/*.html'
      ],
      tasks: [
        'clean:tmp'
      ]
    },<% } %><% if (cssOption === 'sass') { %>
    sass: {
      files: ['<%%= yeogurt.directories.source %>/**/*.<% if (useKss) { %>{scss,sass,md}<% } else { %>{scss,sass}<% } %>'],
      tasks: [
        'injector:sass',
        'sass:server',
        'autoprefixer:server'
      ]
    },<% } %><% if (cssOption === 'less') { %>
    less: {
      files: ['<%%= yeogurt.directories.source %>/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
      tasks: [
        'injector:less',
        'less:server',
        'autoprefixer:server'
      ]
    },<% } %><% if (cssOption === 'stylus') { %>
    stylus: {
      files: ['<%%= yeogurt.directories.source %>/**/*.<% if (useKss) { %>{styl,md}<% } else { %>styl<% } %>'],
      tasks: [
        'injector:stylus',
        'stylus:server',
        'autoprefixer:server'
      ]
    },<% } %>
    injectCss: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.css'
      ],
      tasks: [
        'injector:css',
        'autoprefixer:server'
      ]
    },<% if (jsOption === 'none') { %>
    injectJs: {
      files: [
        '<%%= yeogurt.directories.source %>/**/*.js',
        '!<%%= yeogurt.directories.source %>/{main,app}.js'<% if (jsFramework === 'backbone') { %>,
        '!<%%= yeogurt.directories.source %>/routes.js'<% } %>
      ],
      tasks: ['injector:app']
    },<% } %>
    js: {
      files: [<% if (jsFramework === 'angular') { %>
        '<%%= yeogurt.directories.source %>/**/*.js',
        '!<%%= yeogurt.directories.source %>/**/*.{spec,mock}.js'<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.js'<% } %><% if (jsFramework === 'react' && !useJsx) { %>,
        '!<%%= yeogurt.directories.source %>/**/components/*.js'<% } %>
      ],
      tasks: [
        'newer:eslint'
      ]
    },<% if (jsTemplate === 'handlebars') { %>
    handlebars: {
      files: ['<%%= yeogurt.directories.source %>/templates/**/*.hbs'],
      tasks: [
        'handlebars:server'
      ]
    },<% } %><% if (jsTemplate === 'underscore') { %>
    jst: {
      files: ['<%%= yeogurt.directories.source %>/templates/**/*.jst'],
      tasks: [
        'jst:server'
      ]
    },<% } %><% if (jsTemplate === 'jade') { %>
    jade: {
      files: ['<%%= yeogurt.directories.source %>/templates/**/*.jade'],
      tasks: [
        'jade:server'<% if (useServer) { %>,
        'express:server'<% } %>
      ]
    },<% } %>
    livereload: {
      options: {
        livereload: <% if (!useServer) { %>35729<% } else { %>true<% } %>
      },
      files: [
        '<%%= yeogurt.directories.source %>/*.{ico,png,txt}',<% if (htmlOption === 'swig' || htmlOption === 'jade') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.html',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.html',<% } %><% if (cssOption !== 'css') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.{css,ttf,otf,woff,svg,eot}',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.{css,ttf,otf,woff,svg,eot}',<% } %><% if (jsOption === 'browserify') { %>
        '<%%= yeogurt.directories.temporary %>/**/*.js',<% } else { %><% if (jsFramework === 'angular') { %>
        '<%%= yeogurt.directories.source %>/**/*.js',
        '!<%%= yeogurt.directories.source %>/**/*.{spec,mock}.js',<% } else { %>
        '<%%= yeogurt.directories.source %>/**/*.js',<% } %><% } %><% if (singlePageApplication && jsFramework !== 'react') { %>
        '<%%= yeogurt.directories.temporary %>/templates/**/*.js',<% } %>
        '<%%= yeogurt.directories.source %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }<% if (useServer) { %>,
    express: {
      files: [
        '<%%= yeogurt.directories.server %>/server.js',
        '<%%= yeogurt.directories.server %>/**/*.{js,json,html}'<% if (htmlOption === 'swig') { %>,
        '<%%= yeogurt.directories.server %>/**/*.swig'<% } %><% if (htmlOption === 'jade') { %>,
        '<%%= yeogurt.directories.server %>/**/*.jade'<% } %>
      ],
      tasks: [<% if (htmlOption === 'swig') { %>
        'injector:swig',<% } %><% if (htmlOption === 'jade') { %>
        'injector:jade',<% } %>
        'express:server',
        'wait'
      ],
      options: {
        livereload: true,
        nospawn: true //Without this option specified express won't be reloaded
      }
    }<% } %>
  };<% if (useKss || useJsdoc || useDashboard) { %>

  // Documentation specific configuration
  var docsConfig = {<% if (htmlOption === 'jade' && useDashboard) { %>
    jade: {
      tasks: [
        'dashboard:server'
      ]
    },
    jadePartials: {
      tasks: [
        'dashboard:server'
      ]
    },<% } %><% if (htmlOption === 'swig' && useDashboard) { %>
    swig: {
      tasks: [
        'dashboard:server'
      ]
    },
    swigPartials: {
      tasks: [
        'dashboard:server'
      ]
    },<% } %><% if (jsFramework === 'backbone') { %>
    html: {
      tasks: [
        'dashboard:server',
      ]
    },<% } %><% if (cssOption === 'sass' && useKss) { %>
    sass: {
      tasks: [
        'styleguide:server'
      ]
    },<% } %><% if (cssOption === 'less' && useKss) { %>
    less: {
      tasks: [
        'styleguide:server'
      ]
    },<% } %><% if (useJsdoc) { %>
    js: {
      files: [
        'README.md'
      ],
      tasks: [
        'jsdoc:server'
      ]
    },<% } %><% if (jsFramework === 'react' && useJsdoc) { %>
    react: {
      tasks: [
        'jsdoc:server'
      ]
    },<% } %><% if (useKss) { %>
    kss: {
      files: [
        '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/styleguide/**/*'
      ],
      tasks: ['styleguide:server']
    },<% } %><% if (useDashboard) { %>
    dashboard: {
      files: [
        '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/**/*'
      ],
      tasks: ['dashboard:server']
    }<% } %>
  };<% } %>

  grunt.config.set('watch', config);<% if (useKss || useJsdoc || useDashboard) { %>

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
