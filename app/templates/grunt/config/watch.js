/**
 * Configuration for watch task(s)
 */
'use strict';

var _ = require('lodash');

var taskConfig = function(grunt) {

    // Configuration
    var config = {<% if (htmlOption === 'Jade' && !useServer) { %>
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
        },<% } %><% if (htmlOption === 'Swig' && !useServer) { %>
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
        },<% } %><% if (htmlOption === 'HTML' || (/Backbone/i).test(jsFramework)) { %>
        html: {
            files: [
                '<%%= yeogurt.client %>/views/**/*.html'
            ],
            tasks: [
                'newer:copy:server',
                'clean:temp'
            ]
        },<% } %><% if (cssOption === 'Sass') { %>
        sass: {
            files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{scss,md}<% } else { %>scss<% } %>'],
            tasks: [
                'injector:sass',
                'sass:server'
            ]
        },<% } %><% if (cssOption === 'Less') { %>
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
        },<% if (jsOption === 'None') { %>
        injectJs: {
            files: [
                '<%%= yeogurt.client %>/scripts/**/*.js',
                '!<%%= yeogurt.client %>/scripts/app.js'<% if (jsFramework === 'Backbone') { %>,
                '!<%%= yeogurt.client %>/scripts/routes.js'<% } %>
            ],
            tasks: ['injector:scripts']
        },<% } %>
        js: {
            files: [
                '<%%= yeogurt.client %>/scripts/**/*.js'
            ],
            tasks: [<% if (jshint) { %>
                'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server',<% } %>
                'newer:copy:server'
            ]
        },<% if (jsTemplate === 'React') { %>
        jsx: {
            files: ['<%%= yeogurt.client %>/scripts/views/**/*.jsx'],
            tasks: [<% if (jsOption === 'RequireJS') { %>
                'newer:copy:server',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server'<% } %>
            ]
        },<% } %><% if (jsTemplate === 'Handlebars') { %>
        handlebars: {
            files: ['<%%= yeogurt.client %>/templates/**/*.hbs'],
            tasks: [
                'handlebars:server'
            ]
        },<% } %><% if (jsTemplate === 'Lo-dash') { %>
        jst: {
            files: ['<%%= yeogurt.client %>/templates/**/*.jst'],
            tasks: [
                'jst:server'
            ]
        },<% } %><% if (jsTemplate === 'Jade') { %>
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
                '<%%= yeogurt.client %>/*.{ico,png,txt,html}',
                '<%%= yeogurt.staticServer %>/styles/fonts/**/*.*',
                '<%%= yeogurt.staticServer %>/**/*.html'<% if (cssOption === 'Sass') { %>,
                '<%%= yeogurt.client %>/styles/**/*.scss'<% } %><% if (cssOption === 'Less') { %>,
                '<%%= yeogurt.client %>/styles/**/*.less'<% } %>,
                '<%%= yeogurt.staticServer %>/scripts/**/*.js',<% if (singlePageApplication && jsTemplate !== 'React') { %>
                '<%%= yeogurt.staticServer %>/templates/**/*.js',<% } %><% if (jsTemplate === 'React') { %>
                '<%%= yeogurt.staticServer %>/scripts/**/*.jsx',<% } %>
                '<%%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }<% if (useServer) { %>,
        express: {
            files: [
                'server.js',
                'server/**/*.{js,json,html}'<% if (jsTemplate === 'React') { %>,
                '<%%= yeogurt.client %>/scripts/views/*.jsx'<% } %><% if (jsTemplate === 'Handlebars') { %>,
                '<%%= yeogurt.client %>/templates/**/*.hbs'<% } %><% if (jsTemplate === 'Lo-dash') { %>,
                '<%%= yeogurt.client %>/templates/**/*.jst'<% } %><% if (jsTemplate === 'Jade') { %>,
                '<%%= yeogurt.client %>/templates/**/*.jade'<% } %><% if (htmlOption === 'Swig') { %>,
                '<%%= yeogurt.server %>/templates/**/*.swig'<% } %><% if (htmlOption === 'Jade') { %>,
                '<%%= yeogurt.server %>/templates/**/*.jade'<% } %>
            ],
            tasks: [<% if (htmlOption === 'Swig') { %>
                'injector:swig',<% } %><% if (htmlOption === 'Jade') { %>
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
    <% if (useKss || useJsdoc) { %>
    // Documentation specific configuration
    var docsConfig = {<% if (htmlOption === 'Jade' && useDashboard) { %>
        jadeDocs: {
            files: [
                '<%%= yeogurt.client %>/views/*.jade'
            ],
            tasks: [
                'dashboard:server'
            ]
        },
        jadePartialsDocs: {
            files: [
                '<%%= yeogurt.client %>/views/**/*.jade',
                '!<%%= yeogurt.client %>/views/*.jade'
            ],
            tasks: [
                'dashboard:server'
            ]
        },<% } %><% if (htmlOption === 'Swig' && useDashboard) { %>
        swigDocs: {
            files: [
                '<%%= yeogurt.client %>/views/*.swig'
            ],
            tasks: [
                'dashboard:server'
            ]
        },
        swigPartialsDocs: {
            files: [
                '<%%= yeogurt.client %>/views/**/*.swig',
                '!<%%= yeogurt.client %>/views/*.swig'
            ],
            tasks: [
                'dashboard:server'
            ]
        },<% } %><% if (useDashboard && htmlOption === 'HTML' || (/Backbone/i).test(jsFramework)) { %>
        htmlDocs: {
            files: [
                '<%%= yeogurt.client %>/views/**/*.html'
            ],
            tasks: [
                'dashboard:server',
            ]
        },<% } %><% if (cssOption === 'Sass' && useKss) { %>
        sassDocs: {
            files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{scss,md}<% } else { %>scss<% } %>'],
            tasks: [
                'kss:server'
            ]
        },<% } %><% if (cssOption === 'Less' && useKss) { %>
        lessDocs: {
            files: ['<%%= yeogurt.client %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
            tasks: [
                'kss:server'
            ]
        },<% } %><% if (useJsdoc) { %>
        jsDocs: {
            files: [
                '<%%= yeogurt.client %>/scripts/**/*.js',
                'README.md'
            ],
            tasks: [
                'jsdoc:server'
            ]
        },<% } %><% if (jsTemplate === 'React' && useJsdoc) { %>
        jsxDocs: {
            files: ['<%%= yeogurt.client %>/scripts/views/**/*.jsx'],
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
                '<%%= yeogurt.client %>/dashboard/**/*.*'
            ],
            tasks: ['dashboard:server']
        }<% } %>
    };<% } %>

    grunt.config.set('watch', config);
    <% if (useKss || useJsdoc) { %>
    grunt.registerTask('listen:docs', function() {
        grunt.config('watch', _.extend(config, docsConfig));
        grunt.task.run('watch');
    });
    <% } %>

};

module.exports = taskConfig;
