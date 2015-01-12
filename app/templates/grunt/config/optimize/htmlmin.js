/**
 * Configuration for HTMLmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                collapseBooleanAttributes: true,
                conservativeCollapse: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dist %>/<% if (useServer) { %>client<% } %>',
                src: [
                    '*.html'<% if (jsFramework === 'angular' || !singlePageApplication) { %>, 'templates/**/*.html'<% } %>
                ],
                dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client<% } %>'
            }]
        }
    });

};

module.exports = taskConfig;
