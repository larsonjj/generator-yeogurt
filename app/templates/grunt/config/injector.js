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
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
                    return 'import ' + filePath;
                },
                starttag: '//- [injector:jade]',
                endtag: '//- [endinjector]'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.jade'<% } else { %>
                '<%%= yeogurt.dev %>/index.html'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/**/*.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/index.jade',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/layouts/**/*.jade',
                ]
            }
        },<% } %><% if (htmlOption === 'Swig') { %>
        // Inject application script files into index.html (doesn't include bower)
        swig: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
                    var fileName = url.substring(filePath.lastIndexOf('/')+1);
                    return '{% import "' + filePath + '" as' + fileName + ' %}';
                },
                starttag: '{# [injector:swig] #}',
                endtag: '{# [endinjector] #}'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/base.swig'<% } else { %>
                '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/index.html'<% } %>: [
                    '<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/**/*.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/index.swig',
                    '!<% if (useServer) { %><%%= yeogurt.server %><% } else { %><%%= yeogurt.dev %><% } %>/templates/layouts/**/*.swig',
                ]
            }
        },<% } %><% if (jsOption === 'None (Vanilla JavaScript)') { %>
        // Inject application script files into index.html (doesn't include bower)
        scripts: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
                    return '<script src="' + filePath + '"></script>';
                },
                starttag: '<!-- [injector:js] -->',
                endtag: '<!-- [endinjector] -->'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/<% if (htmlOption === 'Jade') { %>base.jade<% } else if (htmlOption === 'Swig') { %>base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.dev %>/index.html'<% } %>: [
                    '<%%= yeogurt.dev %>/scripts/**/*.js',
                    '!<%%= yeogurt.dev %>/scripts/app.js'<% if (structure === 'Single Page Application') { %>,
                    '!<%%= yeogurt.dev %>/scripts/routes.js'<% } %>
                ]
            }
        },<% } %><% if (cssOption === 'Less') { %>
        // Inject component less into main.less
        less: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/styles/', '');
                    return '@import \'' + filePath + '\';';
                },
                starttag: '// [injector]',
                endtag: '// [endinjector]'
            },
            files: {
                '<%%= yeogurt.dev %>/styles/main.less': [
                    '<%%= yeogurt.dev %>/styles/**/*.less',
                    '!<%%= yeogurt.dev %>/styles/main.less'
                ]
            }
        },<% } %><% if (cssOption === 'Sass') { %>
        // Inject component scss into main.scss
        sass: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/styles/', '');
                    return '@import \'' + filePath.slice(0, -5) + '\';';
                },
                starttag: '// [injector]',
                endtag: '// [endinjector]'
            },
            files: {
                '<%%= yeogurt.dev %>/styles/main.scss': [
                    '<%%= yeogurt.dev %>/styles/**/*.scss',
                    '!<%%= yeogurt.dev %>/styles/main.scss'
                ]
            }
        },<% } %>
        // Inject component css into index.html
        css: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
                    return '<link rel="stylesheet" href="' + filePath + '">';
                },
                starttag: '<!-- [injector:css] -->',
                endtag: '<!-- [endinjector] -->'
            },
            files: {<% if (useServer) { %>
                '<%%= yeogurt.server %>/templates/layouts/<% if (htmlOption === 'Jade') { %>base.jade<% } else if (htmlOption === 'Swig') { %>base.swig<% } else { %>index.html<% } %>'<% } else { %>
                '<%%= yeogurt.dev %>/index.html'<% } %>: [
                    '<%%= yeogurt.dev %>/styles/**/*.css'
                ]
            }
        }
    });

};

module.exports = taskConfig;
