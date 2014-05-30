/**
 * Configuration for imagemin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('uncss', {<% if (useBootstrap) { %>
        options: {
            ignore: [
                // needed for Bootstrap's transitions
                '.fade',
                '.fade.in',
                '.collapse',
                '.collapse.in',
                '.collapsing',
                // needed for the <noscript> warning; remove when fixed in uncss
                '.alert-danger',
                '.visible-xs',
                '.noscript-warning'
            ],
        },
        <% } %>dist: {
            files: {
                '<%%= yeogurt.dist %>/styles/main.css': [
                    '<%%= yeogurt.dist %>/*.html'<% if (useDashboard) { %>,
                    '<%%= yeogurt.dist %>/dashboard/generated/*.html'<% } %>
                ]
            }
        }
    });

    // grunt.loadNpmTasks('grunt-uncss');
};