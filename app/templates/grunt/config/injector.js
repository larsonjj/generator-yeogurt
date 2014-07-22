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
            files: {
                '<%%= yeogurt.dev %>/index.html': [
                    '<%%= yeogurt.dev %>/templates/**/*.jade',
                    '!<%%= yeogurt.dev %>/scripts/index.jade',
                    '!<%%= yeogurt.dev %>/scripts/layouts/**/*.jade',
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
            files: {
                '<%%= yeogurt.dev %>/index.html': [
                    '<%%= yeogurt.dev %>/templates/**/*.swig',
                    '!<%%= yeogurt.dev %>/scripts/index.swig',
                    '!<%%= yeogurt.dev %>/scripts/layouts/**/*.swig',
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
            files: {
                '<%%= yeogurt.dev %>/index.html': [
                    '<%%= yeogurt.dev %>/scripts/**/*.js',
                    '!<%%= yeogurt.dev %>/scripts/app.js',
                    '!<%%= yeogurt.dev %>/scripts/routes.js',
                ]
            }
        },<% } %><% if (cssOption === 'less') { %>
        // Inject component less into main.less
        less: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
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
        },<% } %><% if (cssOption === 'sass') { %>
        // Inject component scss into main.scss
        sass: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/dev/', '');
                    return '@import \'' + filePath + '\';';
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
            files: {
                '<%%= yeogurt.dev %>/index.html': [
                    '<%%= yeogurt.dev %>/styles/**/*.css'
                ]
            }
        }
    });

};

module.exports = taskConfig;
