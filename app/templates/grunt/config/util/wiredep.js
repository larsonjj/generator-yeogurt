/**
 * Configuration for wiredep task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('wiredep', {
        all: {
            options: {
                ignorePath: /client\/|\.\.\//g,
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
                        block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                        detect: {
                            js: /<script.*src=['"]([^'"]+)/gi,
                            css: /<link.*href=['"]([^'"]+)/gi
                        },
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
                '<%%= yeogurt.server %>/templates/layouts/base.jade'<% } else if (htmlOption === 'swig') { %>
                '<%%= yeogurt.server %>/templates/layouts/base.swig'<% } %><% } else { %><% if (htmlOption === 'jade') { %>
                '<%%= yeogurt.client %>/templates/layouts/base.jade'<% } else if (htmlOption === 'swig') { %>
                '<%%= yeogurt.client %>/templates/layouts/base.swig'<% } %><% } %>
            ]
        }
    });

};

module.exports = taskConfig;
