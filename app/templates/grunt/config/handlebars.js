/**
 * Configuration for handlebars task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('handlebars', {
        server: {
            options: {
                namespace: 'JST'
            },
            files: {
                '<%%= yeogurt.server %>/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.hbs']
            }
        },
        dist: {
            options: {
                namespace: 'JST'
            },
            files: {
                '<%%= yeogurt.dist %>/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.hbs']
            }
        }<% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.hbs']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-handlebars');
};