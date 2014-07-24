/**
 * Configuration for jst task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('jst', {
        server: {
            files: {
                '<%%= yeogurt.staticServer %>/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        },
        dist: {
            files: {
                '.tmp/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        }<% if (jsFramework === 'Backbone') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/templates/*.jst']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
