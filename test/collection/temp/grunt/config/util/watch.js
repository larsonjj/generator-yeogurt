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
        },
        injectCss: {
            files: [
                '<%= yeogurt.client %>/styles/**/*.css'
            ],
            tasks: ['injector:css']
        },
        js: {
            files: [
                '<%= yeogurt.client %>/scripts/**/*.js'
            ],
            tasks: [
                'browserify:server',
                'exorcise:server',
                'newer:copy:server'
            ]
        },
        jsx: {
            files: ['<%= yeogurt.client %>/scripts/components/**/*.jsx'],
            tasks: [
                'browserify:server',
                'exorcise:server'
            ]
        },
        images: {
            files: ['<%= yeogurt.client %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%= yeogurt.client %>/*.{ico,png,txt,html}',
                '<%= yeogurt.client %>/images/**/*.webp',
                '<%= yeogurt.client %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeogurt.staticServer %>/*.{ico,png,txt,html}',
                '<%= yeogurt.staticServer %>/styles/fonts/**/*.*',
                '<%= yeogurt.staticServer %>/**/*.html',
                '<%= yeogurt.staticServer %>/scripts/**/*.js',
                '<%= yeogurt.staticServer %>/scripts/**/*.jsx',
                '<%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    };
    

    grunt.config.set('watch', config);
    

};

module.exports = taskConfig;
