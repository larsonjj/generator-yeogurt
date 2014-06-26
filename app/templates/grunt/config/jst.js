/**
 * Configuration for jst task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jst', {
        server: {
            files: {
                '<%%= yeogurt.server %>/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        },
        dist: {
            files: {
                '.tmp/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        }<% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-jst');
};