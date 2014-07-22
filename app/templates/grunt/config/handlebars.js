/**
 * Configuration for handlebars task(s)
 */
'use strict';

var taskConfig = function(grunt) {

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
        }<% if (jsFramework === 'Backbone') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/templates/*.hbs']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
