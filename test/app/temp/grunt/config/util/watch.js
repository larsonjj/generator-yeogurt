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
        swig: {
            files: [
                '<%= yeogurt.client %>/templates/*.swig'
            ],
            tasks: [
                'newer:swig:server'
            ]
        },
        swigPartials: {
            files: [
                '<%= yeogurt.client %>/templates/**/*.swig',
                '!<%= yeogurt.client %>/templates/*.swig'
            ],
            tasks: [
                'injector:swig',
                'swig:server'
            ]
        },
        sass: {
            files: ['<%= yeogurt.client %>/styles/**/*.{scss,sass}'],
            tasks: [
                'injector:sass',
                'sass:server'
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
                'newer:jshint',
                'browserify:server',
                'exorcise:server',
                'newer:copy:server'
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
                '<%= yeogurt.staticServer %>/styles/**/*.{scss,sass}',
                '<%= yeogurt.staticServer %>/scripts/**/*.js',
                '<%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    };
    
    // Documentation specific configuration
    var docsConfig = {
        swig: {
            tasks: [
                'dashboard:server'
            ]
        },
        swigPartials: {
            tasks: [
                'dashboard:server'
            ]
        },
        dashboard: {
            files: [
                '<%= yeogurt.client %>/docs/dashboard/**/*.*'
            ],
            tasks: ['dashboard:server']
        }
    };

    grunt.config.set('watch', config);
    
    grunt.registerTask('listen:docs', function() {
        // Merge docsConfig object with the config object without overwriting arrays
        // Instead concatenate all arrays with each other
        grunt.config('watch', _.merge(config, docsConfig, function(a, b) {
            return _.isArray(a) ? a.concat(b) : undefined;
        }));
        grunt.task.run('watch');
    });
    

};

module.exports = taskConfig;
