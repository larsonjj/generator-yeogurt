/**
 * Configuration for usemin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('useminPrepare', {
        html: <% if (!useServer) { %>'<%%= yeogurt.dist %>/index.html'<% } else { %><% if (htmlOption === 'jade' || htmlOption === 'swig') { %>'.tmp/index.html'<% } else { %>'<%%= yeogurt.client %>/index.html'<% } %><% } %>,
        options: {
            root: '<%%= yeogurt.client %>',
            dest: '<%%= yeogurt.dist %>'
        }
    });

    grunt.config.set('usemin', {
        html: '<%%= yeogurt.dist %>/*.html',<% if (cssOption === 'css') { %>
        css: ['<%%= yeogurt.dist %>/styles/**/*.css'],<% } %>
        options: {
            assetsDirs: ['<%%= yeogurt.client %>', '<%%= yeogurt.client %>/images']
        }
    });

};

module.exports = taskConfig;
