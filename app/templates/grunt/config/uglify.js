/**
 * Configuration for uglify task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('uglify', {
        generated: {
            options: {
                mangle: true,
                preserveComments: 'some',
                sourceMap: true,
                sourceMapIncludeSources: true
            }
        },
        dist: {
            options: {
                mangle: true,
                preserveComments: 'some',
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dist %>/bower_components/',
            dest: '<%%= yeogurt.dist %>/bower_components/',
            src: [<% if (jsOption === 'RequireJS') { %>
                'requirejs/require.js',<% } %>
                'modernizr/modernizr.js'
            ],
            ext: '.js'
        }<% if (structure === 'Single Page Application' && jsFramework !== 'Backbone + React') { %>,
        distTemplates: {
            options: {
                mangle: false,
                preserveComments: 'some'
            },
            expand: true,
            cwd: '.tmp/scripts/templates/',
            dest: '.tmp/scripts/templates/',
            src: ['templates.js']
        }<% } %>
    });

};

module.exports = taskConfig;
