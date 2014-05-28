/**
 * Configuration for LESS task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('less', {
        server: {
            options: {
                paths: ['<%%= yeogurt.dev %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.server %>/styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.server %>/styles/',
                sourceMapRootpath: '',
                dumpLineNumbers: 'comments',
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/',
            dest: '<%%= yeogurt.server %>/',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        },<% if (ieSupport) { %>
        serverPrint: {
            options: {
                paths: ['<%%= yeogurt.dev %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.server %>/styles/print.css.map',
                sourceMapBasepath: '<%%= yeogurt.server %>/styles/',
                sourceMapRootpath: './',
                compress: true,
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/',
            dest: '<%%= yeogurt.server %>/',
            src: [
                'styles/print.less'
            ],
            ext: '.css'
        },<% } %>
        dist: {
            options: {
                paths: ['<%%= yeogurt.dev %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.dist %>/styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.dist %>/styles/',
                sourceMapRootpath: './',
                compress: true,
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/',
            dest: '<%%= yeogurt.dist %>/',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        },<% if (ieSupport) { %>
        distPrint: {
            options: {
                paths: ['<%%= yeogurt.dev %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.dist %>/styles/print.css.map',
                sourceMapBasepath: '<%%= yeogurt.dist %>/styles/',
                sourceMapRootpath: './',
                compress: true,
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/',
            dest: '<%%= yeogurt.dist %>/',
            src: [
                'styles/print.less'
            ],
            ext: '.css'
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-less');
};