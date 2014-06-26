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
                '<%%= yeogurt.server %>/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.hbs']
            }
        },
        dist: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.hbs']
            }
        }<% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/templates/*.hbs']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-handlebars');
};