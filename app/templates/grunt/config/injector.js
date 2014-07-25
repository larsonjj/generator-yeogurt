/**
 * Configuration for injector task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('injector', {
        options: {

        },<% if (htmlOption === 'Jade') { %>
        // Inject application script files into index.html (doesn't include bower)
        jade: {
            options: {
                transform: function(filePath) {<% if (useServer) { %>
                    filePath = filePath.replace('/server/templates/', '../');
                    <% } else { %>
                    filePath = filePath.replace('/client/', '');<% } %>
                    return 'include ' + filePath;
                },
                starttag: '//- [injector:jade]',
                endtag: '//- [endinjector]'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.jade'<% } else { %>
                '<%%= yeogurt.client %>/index.html'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/**/*.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/*.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/layouts/**/*.jade',
                ]
            }
        },<% } %><% if (htmlOption === 'Swig') { %>
        // Inject application script files into index.html (doesn't include bower)
        swig: {
            options: {
                transform: function(filePath) {<% if (useServer) { %>
                    filePath = filePath.replace('/server/templates/', '../');
                    <% } else { %>
                    filePath = filePath.replace('/client/', '');<% } %>
                    var fileName = filePath.substring(filePath.lastIndexOf('/')+1).slice(0, -5);
                    return '{% import "' + filePath + '" as ' + fileName + ' %}';
                },
                starttag: '{# [injector:swig] #}',
                endtag: '{# [endinjector] #}'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.swig'<% } else { %>
                '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/index.html'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/**/*.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/*.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.client %><% } %>/templates/layouts/**/*.swig',
                ]
            }
        },<% } %><% if (jsOption === 'None (Vanilla JavaScript)') { %>
        // Inject application script files into index.html (doesn't include bower)
        scripts: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/', '');
                    return '<script src="' + filePath + '"></script>';
                },<% if (htmlOption === 'Jade') { %>
                starttag: '// [injector:js]',
                endtag: '// [endinjector]'<% } else { %>
                starttag: '<!-- [injector:js] -->',
                endtag: '<!-- [endinjector] -->'<% } %>
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/<% if (htmlOption === 'Jade') { %>base.jade<% } else if (htmlOption === 'Swig') { %>base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.client %>/index.html'<% } %>: [
                    '<%%= yeogurt.client %>/scripts/**/*.js',
                    '!<%%= yeogurt.client %>/scripts/app.js'<% if (structure === 'Single Page Application') { %>,
                    '!<%%= yeogurt.client %>/scripts/routes.js'<% } %>
                ]
            }
        },<% } %><% if (cssOption === 'Less') { %>
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
        },<% } %><% if (cssOption === 'Sass') { %>
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
                    filePath = filePath.replace('/client/', '');
                    return '<link rel="stylesheet" href="' + filePath + '">';
                },<% if (htmlOption === 'Jade') { %>
                starttag: '// [injector:css]',
                endtag: '// [endinjector]'<% } else { %>
                starttag: '<!-- [injector:css] -->',
                endtag: '<!-- [endinjector] -->'<% } %>
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/<% if (htmlOption === 'Jade') { %>base.jade<% } else if (htmlOption === 'Swig') { %>base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.client %>/index.html'<% } %>: [
                    '<%%= yeogurt.client %>/styles/**/*.css'
                ]
            }
        }
    });

};

module.exports = taskConfig;
