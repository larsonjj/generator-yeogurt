/**
 * Configuration for Jade task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('jade', {<% if (structure === 'Static Site') { %><% if (!useServer) { %>
        server: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: true
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',
            dest: '<%%= yeogurt.server %>/',
            src: ['*.jade'],
            ext: '.html'
        },<% } %>
        dist: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: false<% if (useServer) { %>,
                    env: 'development'<% } %>
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',<% if (!useServer) { %>
            dest: '<%%= yeogurt.dist %>/',<% } %><% if (useServer) { %>
            dest: '.tmp/',<% } %>
            src: ['*.jade'],
            ext: '.html'
        }<% } else if (jsTemplate === 'Jade') { %>
        server: {
            options: {
                pretty: true,
                client: true,
                data: {
                    debug: true
                }
            },
            files: {
                '<%%= yeogurt.server %>/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jade']
            }
        },
        dist: {
            options: {
                pretty: false,
                client: true,
                data: {
                    debug: false
                }
            },
            files: {
                '.tmp/templates/templates.js': ['<%%= yeogurt.dev %>/templates/*.jade']
            }
        }<% } %><% if (jsFramework === 'Backbone') { %>,
        test: {
            options: {
                pretty: true,
                client: true,
                data: {
                    debug: true
                }
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/templates/*.jade']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
