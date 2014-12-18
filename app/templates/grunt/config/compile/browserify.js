/**
 * Configuration for browserify task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('browserify', {
        server: {
            options: {<% if (jsFramework === 'react') { %>
                transform:  [ require('grunt-react').browserify ],<% } %>
                browserifyOptions: {
                    debug: true
                },
                watch: true
            },
            files: {
                '<%%= yeogurt.staticServer %>/scripts/app.js': ['<%%= yeogurt.client %>/scripts/app.js']
            }
        },
        dist: {
            options: {<% if (jsFramework === 'react') { %>
                transform:  [ require('grunt-react').browserify ],<% } %>
                browserifyOptions: {
                    debug: true
                },
                preBundleCB: function(b) {
                    // Minify code
                    return b.plugin('minifyify', {
                        map: 'app.js.map',
                        output: 'dist/scripts/app.js.map'
                    });
                }
            },
            files: {
                '<%%= yeogurt.dist %>/scripts/app.js': ['<%%= yeogurt.client %>/scripts/app.js']
            }
        },<% if (useTesting) { %>
        test: {
            options: {<% if (jsFramework === 'react') { %>
                transform:  [ require('grunt-react').browserify ],<% } %>
                browserifyOptions: {
                    debug: true
                },
                watch: true
            },
            files: {
                'test/scripts/bundle.js': ['test/spec/**/*.spec.js']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
