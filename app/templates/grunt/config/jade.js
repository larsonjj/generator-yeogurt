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
                data: function(dest,src) {
                    var data = locals;
                    data.debug = true;
                    return data;
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
                data: function(dest,src) {
                    var data = locals;
                    data.debug = false;
                    return data;
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
                data: function(dest,src) {
                    var data = locals;
                    data.debug = true;
                    return data;
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
                data: function(dest,src) {
                    var data = locals;
                    data.debug = false;
                    return data;
                }
            },
            files: {
                '.tmp/scripts/templates/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jade']
            }
        }<% } %><% if (jsFramework === 'Backbone' || jsFramework === 'Backbone + Marionette') { %>,
        test: {
            options: {
                pretty: true,
                client: true,
                data: function(dest,src) {
                    var data = locals;
                    data.debug = true;
                    return data;
                }
            },
            files: {
                '.tmp/templates.js': ['<%%= yeogurt.dev %>/scripts/templates/*.jade']
            }
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-jade');
};
