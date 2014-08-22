/**
 * Configuration for SASS task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('sass', {
        server: {
            options: {
                outputStyle: 'nested',
                sourceMap: 'true',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.server %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
            }
        },<% if (ieSupport) { %>
        serverPrint: {
            options: {
                outputStyle: 'compressed',
                sourceMap: 'true',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.server %>/styles/print.css': '<%%= yeogurt.dev %>/styles/print.scss'
            }
        },<% } %>
        dist: {
            options: {
                outputStyle: 'compressed',
                sourceMap: 'true',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
            }
        },<% if (ieSupport) { %>
        distPrint: {
            options: {
                outputStyle: 'compressed',
                sourceMap: 'true',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/styles/print.css': '<%%= yeogurt.dev %>/styles/print.scss'
            }
        },<% } %>
    });

    // grunt.loadNpmTasks('grunt-sass');
};
