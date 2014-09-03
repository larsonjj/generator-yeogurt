/**
 * Configuration for jst task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('jst', {
        server: {
            files: {
                '<%%= yeogurt.staticServer %>/templates/templates.js': ['<%%= yeogurt.client %>/templates/*.jst']
            }
        },
        dist: {
            files: {
                '.tmp/templates/templates.js': ['<%%= yeogurt.client %>/templates/*.jst']
            }
        }<% if (jsFramework === 'backbone') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                'test/scripts/templates.js': ['<%%= yeogurt.client %>/templates/*.jst']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
