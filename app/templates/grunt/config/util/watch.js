/**
 * Configuration for watch task(s)
 */
'use strict';

var _ = require('lodash');

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
        },<% } %><% if (htmlOption === 'html' || jsFramework === 'backbone') { %>
        html: {
            files: [
                '<%%= yeogurt.client %>/templates/**/*.html'
            ],
            tasks: [
                'newer:copy:server',
                'clean:temp'
            ]
        },<% } %><% if (cssOption === 'sass') { %>
        sass: {
            files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{scss,sass,md}<% } else { %>{scss,sass}<% } %>'],
            tasks: [
                'injector:sass',
                'sass:server'
            ]
        },<% } %><% if (cssOption === 'less') { %>
        less: {
            files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
            tasks: [
                'injector:less',
                'less:server'
            ]
        },<% } %>
        injectCss: {
            files: [
                '<%%= yeogurt.client %>/styles/**/*.css'
            ],
            tasks: ['injector:css']
        },<% if (jsOption === 'none') { %>
        injectJs: {
            files: [
                '<%%= yeogurt.client %>/scripts/**/*.js',
                '!<%%= yeogurt.client %>/scripts/app.js'<% if (jsFramework === 'backbone') { %>,
                '!<%%= yeogurt.client %>/scripts/routes.js'<% } %>
            ],
            tasks: ['injector:scripts']
        },<% } %>
        js: {
            files: [
                '<%%= yeogurt.client %>/scripts/**/*.js'
            ],
            tasks: [<% if (jshint) { %>
                'newer:jshint',<% } %><% if (jsOption === 'browserify') { %>
                'browserify:server',
                'exorcise:server',<% } %>
                'newer:copy:server'
            ]
        },<% if (jsFramework === 'react') { %>
        jsx: {<% if (useJsx) { %>
            files: ['<%%= yeogurt.client %>/scripts/components/**/*.jsx'],<% } else { %>
            files: ['<%%= yeogurt.client %>/scripts/components/**/*.js'],<% } %>
            tasks: [<% if (jsOption === 'requirejs') { %>
                'newer:copy:server',<% } %><% if (jsOption === 'browserify') { %>
                'browserify:server',
                'exorcise:server'<% } %>
            ]
        },<% } %><% if (jsTemplate === 'handlebars') { %>
        handlebars: {
            files: ['<%%= yeogurt.client %>/templates/**/*.hbs'],
            tasks: [
                'handlebars:server'
            ]
        },<% } %><% if (jsTemplate === 'lodash') { %>
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
        images: {
            files: ['<%%= yeogurt.client %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%%= yeogurt.client %>/*.{ico,png,txt,html}',
                '<%%= yeogurt.client %>/images/**/*.webp',
                '<%%= yeogurt.client %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: <% if (!useServer) { %>'<%%= connect.options.livereload %>'<% } else { %>true<% } %>
            },
            files: [
                '<%%= yeogurt.staticServer %>/*.{ico,png,txt,html}',
                '<%%= yeogurt.staticServer %>/**/*.html',
                '<%%= yeogurt.staticServer %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
                '<%%= yeogurt.staticServer %>/scripts/**/*.js',<% if (singlePageApplication && jsTemplate !== 'react') { %>
                '<%%= yeogurt.staticServer %>/templates/**/*.{jst,hbs,jade}',<% } %>
                '<%%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }<% if (useServer) { %>,
        express: {
            files: [
                'server.js',
                'server/**/*.{js,json,html}'<% if (jsFramework === 'react') { %><% if (useJsx) { %>,
                '<%%= yeogurt.client %>/scripts/components/*.jsx'<% } else { %>
                '<%%= yeogurt.client %>/scripts/components/*.js'<% } %><% if (htmlOption === 'swig') { %>,
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
        },<% } %><% if (useDashboard && htmlOption === 'html' || jsFramework === 'backbone') { %>
        html: {
            tasks: [
                'dashboard:server',
            ]
        },<% } %><% if (cssOption === 'sass' && useKss) { %>
        sass: {
            tasks: [
                'kss:server'
            ]
        },<% } %><% if (cssOption === 'less' && useKss) { %>
        less: {
            tasks: [
                'kss:server'
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
        jsx: {
            tasks: [
                'jsdoc:server'
            ]
        },<% } %><% if (useKss) { %>
        kss: {
            files: [
                '<%%= yeogurt.client %>/docs/styleguide/**/*.*'
            ],
            tasks: ['kss:server']
        },<% } %><% if (useDashboard) { %>
        dashboard: {
            files: [
                '<%%= yeogurt.client %>/docs/dashboard/**/*.*'
            ],
            tasks: ['dashboard:server']
        }<% } %>
    };<% } %>

    grunt.config.set('watch', config);
    <% if (useKss || useJsdoc || useDashboard) { %>
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
