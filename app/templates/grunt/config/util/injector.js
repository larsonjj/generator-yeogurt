/**
 * Configuration for injector task(s)
 */
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

    grunt.config.set('injector', {
        options: {

        },<% if (htmlOption === 'jade') { %>
        // Inject application script files into index.html (doesn't include bower)
        jade: {
            options: {
                transform: function(filePath) {<% if (useServer) { %>
                    filePath = filePath.replace('/server/templates/', '../');
                    <% } else { %>
                    filePath = filePath.replace('/client/templates/', '../');<% } %>
                    return 'include ' + filePath;
                },
                starttag: '//- [injector:jade]',
                endtag: '//- [endinjector]'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.jade'<% } else { %>
                '<%%= yeogurt.client %>/templates/layouts/base.jade'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/**/*.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/*.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/layouts/**/*.jade',
                ]
            }
        },<% } %><% if (htmlOption === 'swig') { %>
        // Inject application script files into index.html (doesn't include bower)
        swig: {
            options: {
                transform: function(filePath) {<% if (useServer) { %>
                    filePath = filePath.replace('/server/templates/', '../');
                    <% } else { %>
                    filePath = filePath.replace('/client/templates/', '../');<% } %>
                    var fileName = filePath.substring(filePath.lastIndexOf('/')+1).slice(0, -5);
                    return '{% import "' + filePath + '" as ' + _str.camelize(fileName) + ' %}';
                },
                starttag: '{# [injector:swig] #}',
                endtag: '{# [endinjector] #}'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.swig'<% } else { %>
                '<%%= yeogurt.client %>/templates/layouts/base.swig'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/**/*.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/*.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/layouts/**/*.swig',
                ]
            }
        },<% } %><% if (jsOption === 'none') { %>
        // Inject application script files into index.html (doesn't include bower)
        scripts: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/', '');
                    return '<script src="' + filePath + '"></script>';
                },<% if (htmlOption === 'jade') { %>
                starttag: '// [injector:js]',
                endtag: '// [endinjector]'<% } else { %>
                starttag: '<!-- [injector:js] -->',
                endtag: '<!-- [endinjector] -->'<% } %>
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/<% if (htmlOption === 'jade') { %>layouts/base.jade<% } else if (htmlOption === 'swig') { %>layouts/base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.client %>/<% if (htmlOption === 'jade') { %>templates/layouts/base.jade<% } else if (htmlOption === 'swig') { %>templates/layouts/base.swig<% } else { %>index.html<% } %>'<% } %>: [
                    '<%%= yeogurt.client %>/scripts/**/*.js',
                    '!<%%= yeogurt.client %>/scripts/app.js'<% if (singlePageApplication) { %>,
                    '!<%%= yeogurt.client %>/scripts/routes.js'<% } %>
                ]
            }
        },<% } %><% if (cssOption === 'less') { %>
        // Inject component less into main.less
        less: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/styles/', '');
                    return '@import \'' + filePath + '\';';
                },
                starttag: '// [injector]',
                endtag: '// [endinjector]'
            },
            files: {
                '<%%= yeogurt.client %>/styles/main.less': [
                    '<%%= yeogurt.client %>/styles/**/*.less',
                    '!<%%= yeogurt.client %>/styles/main.less'
                ]
            }
        },<% } %><% if (cssOption === 'sass') { %>
        // Inject component scss into main.scss
        sass: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/styles/', '');
                    return '@import \'' + filePath.slice(0, -5) + '\';';
                },
                starttag: '// [injector]',
                endtag: '// [endinjector]'
            },
            files: {
                '<%%= yeogurt.client %>/styles/main.scss': [
                    '<%%= yeogurt.client %>/styles/**/*.scss',
                    '!<%%= yeogurt.client %>/styles/main.scss'
                ]
            }
        },<% } %>
        // Inject component css into index.html
        css: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/', '');<% if (htmlOption === 'jade') { %>
                    return 'link(rel=\'stylesheet\', href=\'' + filePath + '\')';<% } else { %>
                    return '<link rel="stylesheet" href="' + filePath + '">';<% } %>
                },<% if (htmlOption === 'jade') { %>
                starttag: '// [injector:css]',
                endtag: '// [endinjector]'<% } else { %>
                starttag: '<!-- [injector:css] -->',
                endtag: '<!-- [endinjector] -->'<% } %>
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/<% if (htmlOption === 'jade') { %>layouts/base.jade<% } else if (htmlOption === 'swig') { %>layouts/base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.client %>/<% if (htmlOption === 'jade') { %>templates/layouts/base.jade<% } else if (htmlOption === 'swig') { %>templates//layouts/base.swig<% } else { %>index.html<% } %>'<% } %>: [
                    '<%%= yeogurt.client %>/styles/**/*.css',
                    '!<%%= yeogurt.client %>/styles/main.css'
                ]
            }
        }
    });

};

module.exports = taskConfig;
