/**
 * Configuration for watch task(s)
 */
'use strict';
<% if (useKss || useJsdoc || useDashboard) { %>
var _ = require('lodash');<% } %>

var taskConfig = function(grunt) {

  // Configuration
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
        '<%%= yeogurt.client %>/templates/*.jade'
      ],
      tasks: [
        'newer:jade:server'
      ]
    },
    jadePartials: {
      files: [
        '<%%= yeogurt.client %>/templates/**/*.jade',
        '!<%%= yeogurt.client %>/templates/*.jade'
      ],
      tasks: [
        'injector:jade',
        'jade:server'
      ]
    },<% } %><% if (htmlOption === 'swig' && !useServer) { %>
    swig: {
      files: [
        '<%%= yeogurt.client %>/templates/*.swig'
      ],
      tasks: [
        'newer:swig:server'
      ]
    },
    swigPartials: {
      files: [
        '<%%= yeogurt.client %>/templates/**/*.swig',
        '!<%%= yeogurt.client %>/templates/*.swig'
      ],
      tasks: [
        'injector:swig',
        'swig:server'
      ]
    },<% } %><% if (jsFramework === 'backbone') { %>
    html: {
      files: [
        '<%%= yeogurt.client %>/templates/**/*.html'
      ],
      tasks: [
        'clean:tmp'
      ]
    },<% } %><% if (cssOption === 'sass') { %>
    sass: {
      files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{scss,sass,md}<% } else { %>{scss,sass}<% } %>'],
      tasks: [
        'injector:sass',
        'sass:server',
        'autoprefixer:server'
      ]
    },<% } %><% if (cssOption === 'less') { %>
    less: {
      files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
      tasks: [
        'injector:less',
        'less:server',
        'autoprefixer:server'
      ]
    },<% } %><% if (cssOption === 'stylus') { %>
    stylus: {
      files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{styl,md}<% } else { %>styl<% } %>'],
      tasks: [
        'injector:stylus',
        'stylus:server',
        'autoprefixer:server'
      ]
    },<% } %>
    injectCss: {
      files: [
        '<%%= yeogurt.client %>/styles/**/*.css'
      ],
      tasks: [
        'injector:css',
        'autoprefixer:server'
      ]
    },<% if (jsOption === 'none') { %>
    injectJs: {
      files: [
        '<%%= yeogurt.client %>/scripts/**/*.js',
        '!<%%= yeogurt.client %>/scripts/{main,app}.js'<% if (jsFramework === 'backbone') { %>,
        '!<%%= yeogurt.client %>/scripts/routes.js'<% } %>
      ],
      tasks: ['injector:scripts']
    },<% } %>
    js: {
      files: [<% if (jsFramework === 'angular') { %>
        '<%%= yeogurt.client %>/app/**/*.js',
        '!<%%= yeogurt.client %>/app/**/*.{spec,mock}.js'<% } else { %>
        '<%%= yeogurt.client %>/scripts/**/*.js'<% } %><% if (jsFramework === 'react' && !useJsx) { %>,
        '!<%%= yeogurt.client %>/scripts/**/components/*.js'<% } %>
      ],
      tasks: [
        'newer:jshint'
      ]
    },<% if (jsTemplate === 'handlebars') { %>
    handlebars: {
      files: ['<%%= yeogurt.client %>/templates/**/*.hbs'],
      tasks: [
        'handlebars:server'
      ]
    },<% } %><% if (jsTemplate === 'underscore') { %>
    jst: {
      files: ['<%%= yeogurt.client %>/templates/**/*.jst'],
      tasks: [
        'jst:server'
      ]
    },<% } %><% if (jsTemplate === 'jade') { %>
    jade: {
      files: ['<%%= yeogurt.client %>/templates/**/*.jade'],
      tasks: [
        'jade:server'<% if (useServer) { %>,
        'express:server'<% } %>
      ]
    },<% } %>
    livereload: {
      options: {
        livereload: <% if (!useServer) { %>'<%%= connect.options.livereload %>'<% } else { %>true<% } %>
      },
      files: [
        '<%%= yeogurt.client %>/*.{ico,png,txt}',<% if (htmlOption === 'swig' || htmlOption === 'jade') { %>
        '<%%= yeogurt.tmp %>/**/*.html',<% } else { %>
        '<%%= yeogurt.client %>/**/*.html',<% } %><% if (cssOption !== 'css') { %>
        '<%%= yeogurt.tmp %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',<% } else { %>
        '<%%= yeogurt.client %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',<% } %><% if (jsOption === 'browserify') { %>
        '<%%= yeogurt.tmp %>/scripts/**/*.js',<% } else { %><% if (jsFramework === 'angular') { %>
        '<%%= yeogurt.client %>/app/**/*.js',
        '!<%%= yeogurt.client %>/app/**/*.{spec,mock}.js',<% } else { %>
        '<%%= yeogurt.client %>/scripts/**/*.js',<% } %><% } %><% if (singlePageApplication && jsTemplate !== 'react') { %>
        '<%%= yeogurt.tmp %>/templates/**/*.js',<% } %>
        '<%%= yeogurt.client %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }<% if (useServer) { %>,
    express: {
      files: [
        'server.js',
        'server/**/*.{js,json,html}'<% if (htmlOption === 'swig') { %>,
        '<%%= yeogurt.server %>/templates/**/*.swig'<% } %><% if (htmlOption === 'jade') { %>,
        '<%%= yeogurt.server %>/templates/**/*.jade'<% } %>
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
  };
  <% if (useKss || useJsdoc || useDashboard) { %>
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
        '<%%= yeogurt.client %>/docs/styleguide/**/*.*'
      ],
      tasks: ['styleguide:server']
    },<% } %><% if (useDashboard) { %>
    dashboard: {
      files: [
        '<%%= yeogurt.client %>/docs/dashboard/**/*.*'
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
  });
  <% } %>

};

module.exports = taskConfig;
