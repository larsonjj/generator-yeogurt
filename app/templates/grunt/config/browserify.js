/**
 * Configuration for browserify task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('browserify', {
        server: {
            options: {<% if (jsFramework === 'Backbone + React') { %>
                transform:  [ require('grunt-react').browserify ],<% } %>
                bundleOptions: {
                    debug: true
                },
                watch: true
            },
            files: {
                '<%%= yeogurt.staticServer %>/scripts/app.js': ['<%%= yeogurt.client %>/scripts/app.js']
            }
        },
        dist: {
            options: {<% if (jsFramework === 'Backbone + React') { %>
                transform:  [ require('grunt-react').browserify ],<% } %>
                bundleOptions: {
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
        }
    });

};

module.exports = taskConfig;
