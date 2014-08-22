/**
 * Configuration for watch task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('watch', {
        options: {
            spawn: true,
            livereload: false
        },
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
        },<% if (htmlOption === 'Jade') { %>
        jade: {
            files: [
                '<%%= yeogurt.dev %>/views/*.jade'
            ],
            tasks: [
                'newer:jade:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },
        jadePartials: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.jade',
                '!<%%= yeogurt.dev %>/views/*.jade'
            ],
            tasks: [
                'jade:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },<% } else if (htmlOption === 'Swig') { %>
        swig: {
            files: [
                '<%%= yeogurt.dev %>/views/*.swig'
            ],
            tasks: [
                'newer:swig:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },
        swigPartials: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.swig',
                '!<%%= yeogurt.dev %>/views/*.swig'
            ],
            tasks: [
                'swig:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },<% } else if (htmlOption === 'None (Vanilla HTML)' || (/Backbone/i).test(jsFramework)) { %>html: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.html'
            ],
            tasks: [
                'newer:copy:server',
                <% if (useDashboard) { %>'dashboard:server',<% } %>
                'clean:temp'
            ]
        },
        <% } %><% if (cssOption === 'SASS') { %>
        sass: {
            files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{scss,sass,md}<% } else { %>{scss,sass}<% } %>'],
            tasks: [
                'sass:server',<% if (useKss) { %>
                'kss:server'<% } %>
            ]
        },<% } else if (cssOption === 'LESS') { %>
        less: {
            files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
            tasks: [
                'less:server',<% if (useKss) { %>
                'kss:server'<% } %>
            ]
        },<% } %>
        js: {
            files: [
                '<%%= yeogurt.dev %>/scripts/**/*.js'<% if (useJsdoc) { %>,
                'README.md'<% } %>
            ],
            tasks: [<% if (jshint) { %>
                'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server',<% } %><% if (useJsdoc) { %>
                'jsdoc:server',<% } %>
                'newer:copy:server'
            ]
        },<% if (useJsdoc) { %>
        jsdoc: {
            files: [
                'README.md',
                '<%%= yeogurt.dev %>/docs/api/**/*.*'
            ],
            tasks: ['jsdoc:server']
        },<% } %><% if (useKss) { %>
        kss: {
            files: [
                '<%%= yeogurt.dev %>/docs/styleguide/**/*.*'
            ],
            tasks: ['kss:server']
        },<% } %><% if (useDashboard) { %>
        dashboard: {
            files: [
                '<%%= yeogurt.dev %>/dashboard/**/*.*'
            ],
            tasks: ['dashboard:server']
        },<% } %>
        images: {
            files: ['<%%= yeogurt.dev %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%%= yeogurt.dev %>/*.{ico,png,txt,html}',<% if (extras.indexOf(htaccess) !== -1) { %>
                '<%%= yeogurt.dev %>/.htaccess',<% } %>
                '<%%= yeogurt.dev %>/images/**/*.webp',
                '<%%= yeogurt.dev %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: '<%%= connect.options.livereload %>'
            },
            files: [
                '<%%= yeogurt.dev %>/*.{ico,png,txt,html}'<% if (extras.indexOf(htaccess) !== -1) { %>,
                '<%%= yeogurt.dev %>/.htaccess'<% } %>,
                '<%%= yeogurt.server %>/styles/fonts/**/*.*',
                '<%%= yeogurt.server %>/**/*.html'<% if (cssOption === 'SASS') { %>,
                '<%%= yeogurt.dev %>/styles/**/*.{scss,sass}'<% } else if (cssOption === 'LESS') { %>,
                '<%%= yeogurt.dev %>/styles/**/*.less'<% } %>,
                '<%%= yeogurt.server %>/scripts/**/*.js',
                '<%%= yeogurt.server %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
};
