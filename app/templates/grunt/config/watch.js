/**
 * Configuration for watch task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('watch', {
        options: {
            spawn: true,
            livereload: false
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
                'newer:jade:server',
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
                'newer:swig:server',
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
            files: ['<%%= yeogurt.dev %>/styles/**/*.scss'],
            tasks: [
                'sass:server',<% if (useKss) { %>
                'kss:server'<% } %>
            ]
        },<% } else if (cssOption === 'LESS') { %>
        less: {
            files: ['<%%= yeogurt.dev %>/styles/**/*.less'],
            tasks: [
                'less:server',<% if (useKss) { %>
                'kss:server'<% } %>
            ]
        },<% } %>
        js: {
            files: [
                '<%%= yeogurt.dev %>/scripts/**/*.js',
                '<%%= yeogurt.dev %>/bower_components/**/*.js'
            ],
            tasks: [<% if (jshint) { %>
                'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server',<% } %><% if (useJsdoc) { %>
                'jsdoc:server',<% } %>
                'newer:copy:server'
            ]
        },
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
                '<%%= yeogurt.dev %>/styles/**/*.scss'<% } else if (cssOption === 'LESS') { %>,
                '<%%= yeogurt.dev %>/styles/**/*.less'<% } %>,
                '<%%= yeogurt.server %>/scripts/**/*.js',
                '<%%= yeogurt.server %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
};