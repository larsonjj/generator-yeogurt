/**
 * Configuration for jst task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jst', {
        server: {
            files: {
                '<%%= yeogurt.server %>/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jst']
            }
        },
        dist: {
            files: {
                '.tmp/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jst']
            }
        }<% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jst']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-jst');
};