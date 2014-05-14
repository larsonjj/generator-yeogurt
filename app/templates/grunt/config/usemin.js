/**
 * usemin.js
 * Configuration for usemin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('useminPrepare', {
        html: '<%%= yeogurt.dist %>/index.html',
        options: {
            root: '<%%= yeogurt.dev %>',
            dest: '<%%= yeogurt.dist %>'
        }
    });

    grunt.config.set('usemin', {
        html: '<%%= yeogurt.dist %>/index.html',<% if (cssOption === 'None (Vanilla CSS)') { %>
        css: ['<%%= yeogurt.dist %>/styles/{,*/}*.css'],<% } %>
        options: {
            assetsDirs: ['<%%= yeogurt.dev %>', '<%%= yeogurt.dev %>/images']
        }
    });

    // grunt.loadNpmTasks('grunt-usemin');
};