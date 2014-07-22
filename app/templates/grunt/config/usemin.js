/**
 * Configuration for usemin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('useminPrepare', {
        html: <% if (!useServer) { %>'<%%= yeogurt.dist %>/*.html'<% } else { %>'.tmp/*.html'<% } %>,
        options: {
            root: '<%%= yeogurt.dev %>',
            dest: '<%%= yeogurt.dist %>'
        }
    });

    grunt.config.set('usemin', {
        html: <% if (!useServer) { %>'<%%= yeogurt.dist %>/*.html'<% } else { %>'.tmp/index.html'<% } %>,<% if (cssOption === 'None (Vanilla CSS)') { %>
        css: ['<%%= yeogurt.dist %>/styles/**/*.css'],<% } %>
        options: {
            assetsDirs: ['<%%= yeogurt.dev %>', '<%%= yeogurt.dev %>/images']
        }
    });

};

module.exports = taskConfig;
