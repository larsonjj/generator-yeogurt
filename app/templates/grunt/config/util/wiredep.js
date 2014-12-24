/**
 * Configuration for wiredep task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('wiredep', {
        all: {
            options: {
                ignorePath: /^<%%= yeogurt.client %>|\.\./,
                fileTypes: {<% if (singlePageApplication) { %>
                    // Make sure everything has an absolute path
                    html: {
                        replace: {
                            js: '<script src="/{{filePath}}"></script>',
                            css: '<link rel="stylesheet" href="/{{filePath}}" />'
                        }
                    }<% } %><% if (htmlOption === 'jade') { %>
                    // Make sure everything has an absolute path
                    jade: {
                        replace: {
                            js: 'script(src=\'/{{filePath}}\')',
                            css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
                        }
                    }<% } else if (htmlOption === 'swig') { %>
                    // Make sure everything has an absolute path
                    swig: {
                        replace: {
                            js: '<script src="/{{filePath}}"></script>',
                            css: '<link rel="stylesheet" href="/{{filePath}}" />'
                        }
                    }<% } %>
                },
                // packages to ignore
                exclude: [
                    'bower_components/html5shiv/',
                    'bower_components/consolelog/',
                    'bower_components/modernizr/',<% if (jsOption === 'requirejs') { %>
                    'bower_components/requirejs/'<% } %><% if (jsFramework === 'react') { %>
                    'bower_components/es5-shim/'<% } %>
                ],
                overrides: {<% if (jsTemplate === 'handlebars') { %>
                    'handlebars': {
                        'main': 'handlebars.runtime.js'
                    }<% } else if (jsTemplate === 'jade') { %>
                    'jade': {
                        'main': 'runtime.js'
                    }<% } %>
                }
            },
            src: [<% if (singlePageApplication) { %>
                '<%%= yeogurt.client %>/index.html'<% } else if (useServer) { %><% if (htmlOption === 'jade') { %>
                '<%%= yeogurt.server %>/templates/index.jade'<% } else if (htmlOption === 'swig') { %>
                '<%%= yeogurt.server %>/templates/index.swig'<% } %><% } else { %><% if (htmlOption === 'jade') { %>
                '<%%= yeogurt.client %>/templates/index.jade'<% } else if (htmlOption === 'swig') { %>
                '<%%= yeogurt.client %>/templates/index.swig'<% } %><% } %>
            ]
        }
    });

};

module.exports = taskConfig;
