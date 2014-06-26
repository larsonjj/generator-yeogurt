/**
 * Configuration for Jade task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jade', {<% if (structure === 'Static Site') { %>
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
        },
        dist: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: false
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/templates/',
            dest: '<%%= yeogurt.dist %>/',
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
        }<% } %><% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
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

    // grunt.loadNpmTasks('grunt-contrib-jade');
};