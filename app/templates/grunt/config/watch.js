/**
 * Configuration for watch task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.registerTask('listen<% if (useKss || useJsdoc) { %>:docs<% } %>', function() {
        var config = {<% if (htmlOption === 'Jade') { %>
            jade: {
                files: [
                    '<%%= yeogurt.dev %>/views/*.jade'
                ],
                tasks: [
                    'newer:jade:server',
                    <% if (useDashboard) { %>'dashboard:server'<% } %>
                ]
            },
            jadePartials: {
                files: [
                    '<%%= yeogurt.dev %>/views/**/*.jade',
                    '!<%%= yeogurt.dev %>/views/*.jade'
                ],
                tasks: [
                    'jade:server',
                    <% if (useDashboard) { %>'dashboard:server'<% } %>
                ]
            },<% } else if (htmlOption === 'Swig') { %>
            swig: {
                files: [
                    '<%%= yeogurt.dev %>/views/*.swig'
                ],
                tasks: [
                    'newer:swig:server',
                    <% if (useDashboard) { %>'dashboard:server'<% } %>
                ]
            },
            swigPartials: {
                files: [
                    '<%%= yeogurt.dev %>/views/**/*.swig',
                    '!<%%= yeogurt.dev %>/views/*.swig'
                ],
                tasks: [
                    'newer:swig:server',
                    <% if (useDashboard) { %>'dashboard:server'<% } %>
                ]
            },<% } else if (htmlOption === 'None (Vanilla HTML)' || (/Backbone/i).test(jsFramework)) { %>
            html: {
                files: [
                    '<%%= yeogurt.dev %>/views/**/*.html'
                ],
                tasks: [
                    'newer:copy:server',
                    <% if (useDashboard) { %>'dashboard:server',<% } %>
                    'clean:temp'
                ]
            },
            <% } %><% if (cssOption === 'SASS') { %>
            sass: {
                files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{scss,md}<% } else { %>scss<% } %>'],
                tasks: [
                    'sass:server',<% if (useKss) { %>
                    'kss:server'<% } %>
                ]
            },<% } else if (cssOption === 'LESS') { %>
            less: {
                files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
                tasks: [
                    'less:server',<% if (useKss) { %>
                    'kss:server'<% } %>
                ]
            },<% } %>
            js: {
                files: [
                    '<%%= yeogurt.dev %>/scripts/**/*.js',
                    '<%%= yeogurt.dev %>/bower_components/**/*.js'<% if (useJsdoc) { %>,
                    'README.md'<% } %>
                ],
                tasks: [<% if (jshint) { %>
                    'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                    'browserify:server',
                    'exorcise:server',<% } %><% if (useJsdoc) { %>
                    'jsdoc:server',<% } %>
                    'newer:copy:server'
                ]
            },<% if (jsTemplate === 'React') { %>
            jsx: {
                files: ['<%%= yeogurt.dev %>/scripts/views/**/*.jsx'],
                tasks: [<% if (jsOption === 'RequireJS') { %>
                    'newer:copy:server',<% } %><% if (jsOption === 'Browserify') { %>
                    'browserify:server',
                    'exorcise:server'<% } %><% if (useServer) { %>,
                    'express:server'<% } %>
                ]
            },<% } %><% if (jsTemplate === 'Handlebars') { %>
            handlebars: {
                files: ['<%%= yeogurt.dev %>/templates/**/*.hbs'],
                tasks: [
                    'handlebars:server'<% if (useServer) { %>,
                    'express:server'<% } %>
                ]
            },<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
            jst: {
                files: ['<%%= yeogurt.dev %>/templates/**/*.jst'],
                tasks: [
                    'jst:server'<% if (useServer) { %>,
                    'express:server'<% } %>
                ]
            },<% } %><% if (jsTemplate === 'Jade') { %>
            jade: {
                files: ['<%%= yeogurt.dev %>/templates/**/*.jade'],
                tasks: [
                    'jade:server'<% if (useServer) { %>,
                    'express:server'<% } %>
                ]
            },<% } %><% if (useJsdoc) { %>
            jsdoc: {
                files: [
                    'README.md'
                ],
                tasks: ['jsdoc:server']
            },<% } %><% if (useKss) { %>
            kss: {
                files: [
                    '<%%= yeogurt.dev %>/docs/styleguide/**/*.*'
                ],
                tasks: ['kss:server']
            },<% } %><% if (useDashboard) { %>
            dashboard: {
                files: [
                    '<%%= yeogurt.dev %>/dashboard/**/*.*'
                ],
                tasks: ['dashboard:server']
            },<% } %>
            images: {
                files: ['<%%= yeogurt.dev %>/images/**/*.{png,jpg,gif}'],
                tasks: ['newer:copy:server']
            },
            root: {
                files: [
                    '<%%= yeogurt.dev %>/*.{ico,png,txt,html}',<% if (extras.indexOf(htaccess) !== -1) { %>
                    '<%%= yeogurt.dev %>/.htaccess',<% } %>
                    '<%%= yeogurt.dev %>/images/**/*.webp',
                    '<%%= yeogurt.dev %>/styles/fonts/**/*.*'
                ],
                tasks: ['newer:copy:server']
            },
            livereload: {
                options: {
                    livereload: <% if (!useServer) { %>'<%%= connect.options.livereload %>'<% } else { %>true<% } %>
                },
                files: [
                    '<%%= yeogurt.dev %>/*.{ico,png,txt,html}'<% if (extras.indexOf(htaccess) !== -1) { %>,
                    '<%%= yeogurt.dev %>/.htaccess'<% } %>,
                    '<%%= yeogurt.server %>/styles/fonts/**/*.*',
                    '<%%= yeogurt.server %>/**/*.html'<% if (cssOption === 'SASS') { %>,
                    '<%%= yeogurt.dev %>/styles/**/*.scss'<% } else if (cssOption === 'LESS') { %>,
                    '<%%= yeogurt.dev %>/styles/**/*.less'<% } %>,
                    '<%%= yeogurt.server %>/scripts/**/*.js',<% if (structure === 'Single Page Application' && jsTemplate !== 'React') { %>
                    '<%%= yeogurt.server %>/templates/**/*.js',<% } %><% if (jsTemplate === 'React') { %>
                    '<%%= yeogurt.server %>/scripts/**/*.jsx',<% } %>
                    '<%%= yeogurt.server %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }<% if (useServer) { %>,
            express: {
                files: [
                    'app.js',
                    'lib/**/*.{js,json}'
                ],
                tasks: ['express:server', 'wait'],
                options: {
                    livereload: true,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }<% } %>
        };
        grunt.config('watch', config);
        grunt.task.run('watch');
    });<% if (useKss || useJsdoc) { %>

    grunt.config.set('watch', {<% if (htmlOption === 'Jade') { %>
        jade: {
            files: [
                '<%%= yeogurt.dev %>/views/*.jade'
            ],
            tasks: [
                'newer:jade:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },
        jadePartials: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.jade',
                '!<%%= yeogurt.dev %>/views/*.jade'
            ],
            tasks: [
                'newer:jade:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },<% } else if (htmlOption === 'Swig') { %>
        swig: {
            files: [
                '<%%= yeogurt.dev %>/views/*.swig'
            ],
            tasks: [
                'newer:swig:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },
        swigPartials: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.swig',
                '!<%%= yeogurt.dev %>/views/*.swig'
            ],
            tasks: [
                'newer:swig:server',
                <% if (useDashboard) { %>'dashboard:server'<% } %>
            ]
        },<% } else if (htmlOption === 'None (Vanilla HTML)' || (/Backbone/i).test(jsFramework)) { %>
        html: {
            files: [
                '<%%= yeogurt.dev %>/views/**/*.html'
            ],
            tasks: [
                'newer:copy:server',
                <% if (useDashboard) { %>'dashboard:server',<% } %>
                'clean:temp'
            ]
        },
        <% } %><% if (cssOption === 'SASS') { %>
        sass: {
            files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{scss,md}<% } else { %>scss<% } %>'],
            tasks: [
                'sass:server',
            ]
        },<% } else if (cssOption === 'LESS') { %>
        less: {
            files: ['<%%= yeogurt.dev %>/styles/**/*.<% if (useKss) { %>{less,md}<% } else { %>less<% } %>'],
            tasks: [
                'less:server',
            ]
        },<% } %>
        js: {
            files: [
                '<%%= yeogurt.dev %>/scripts/**/*.js',
                '<%%= yeogurt.dev %>/bower_components/**/*.js'<% if (useJsdoc) { %>,
                'README.md'<% } %>
            ],
            tasks: [<% if (jshint) { %>
                'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server',<% } %>
                'newer:copy:server'
            ]
        },<% if (jsTemplate === 'React') { %>
        jsx: {
            files: ['<%%= yeogurt.dev %>/scripts/views/**/*.jsx'],
            tasks: [<% if (jsOption === 'RequireJS') { %>
                'newer:copy:server',<% } %><% if (jsOption === 'Browserify') { %>
                'browserify:server',
                'exorcise:server'<% } %><% if (useServer) { %>,
                'express:server'<% } %>
            ]
        },<% } %><% if (jsTemplate === 'Handlebars') { %>
        handlebars: {
            files: ['<%%= yeogurt.dev %>/templates/**/*.hbs'],
            tasks: [
                'handlebars:server'<% if (useServer) { %>,
                'express:server'<% } %>
            ]
        },<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
        jst: {
            files: ['<%%= yeogurt.dev %>/templates/**/*.jst'],
            tasks: [
                'jst:server'<% if (useServer) { %>,
                'express:server'<% } %>
            ]
        },<% } %><% if (jsTemplate === 'Jade') { %>
        jade: {
            files: ['<%%= yeogurt.dev %>/templates/**/*.jade'],
            tasks: [
                'jade:server'<% if (useServer) { %>,
                'express:server'<% } %>
            ]
        },<% } %><% if (useDashboard) { %>
        dashboard: {
            files: [
                '<%%= yeogurt.dev %>/dashboard/**/*.*'
            ],
            tasks: ['dashboard:server']
        },<% } %>
        images: {
            files: ['<%%= yeogurt.dev %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%%= yeogurt.dev %>/*.{ico,png,txt,html}',<% if (extras.indexOf(htaccess) !== -1) { %>
                '<%%= yeogurt.dev %>/.htaccess',<% } %>
                '<%%= yeogurt.dev %>/images/**/*.webp',
                '<%%= yeogurt.dev %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: <% if (!useServer) { %>'<%%= connect.options.livereload %>'<% } else { %>true<% } %>
            },
            files: [
                '<%%= yeogurt.dev %>/*.{ico,png,txt,html}'<% if (extras.indexOf(htaccess) !== -1) { %>,
                '<%%= yeogurt.dev %>/.htaccess'<% } %>,
                '<%%= yeogurt.server %>/styles/fonts/**/*.*',
                '<%%= yeogurt.server %>/**/*.html'<% if (cssOption === 'SASS') { %>,
                '<%%= yeogurt.dev %>/styles/**/*.scss'<% } else if (cssOption === 'LESS') { %>,
                '<%%= yeogurt.dev %>/styles/**/*.less'<% } %>,
                '<%%= yeogurt.server %>/scripts/**/*.js',<% if (structure === 'Single Page Application' && jsTemplate !== 'React') { %>
                '<%%= yeogurt.server %>/templates/**/*.js',<% } %><% if (jsTemplate === 'React') { %>
                '<%%= yeogurt.server %>/scripts/**/*.jsx',<% } %>
                '<%%= yeogurt.server %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }<% if (useServer) { %>,
        express: {
            files: [
                'app.js',
                'lib/**/*.{js,json}'
            ],
            tasks: ['express:server', 'wait'],
            options: {
                livereload: true,
                nospawn: true //Without this option specified express won't be reloaded
            }
        }<% } %>
    });<% } %>

    // grunt.loadNpmTasks('grunt-contrib-watch');
};