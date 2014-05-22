/**
 * jade.js
 * Configuration for Jade task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jade', {<% if (jsTemplate !== 'Jade') { %>
        server: {
            options: {
                pretty: true,
                client: false,
                data: {
                    debug: true
                }
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/views/',
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
            cwd: '<%%= yeogurt.dev %>/views/',
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
                '<%%= yeogurt.server %>/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jade']
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
                '<%%= yeogurt.dist %>/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jade']
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
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jade']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-jade');
};