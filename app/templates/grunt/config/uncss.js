/**
 * imagemin.js
 * Configuration for imagemin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('uncss', {
        dist: {
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