// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
/*jshint camelcase: false */
'use strict';

// Modules
var _ = require('lodash');

// # Globbing
// for performance reasons use the {,*/} expression, this will only search one folder level deep
// ex: 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders us the /**/ expression:
// ex: 'test/spec/**/*.js'

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks with JIT (loads only needed tasks, so there is a large gain in speed)
    require('jit-grunt')(grunt<% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') {%>, {
        useminPrepare: 'grunt-usemin'
    }<% } %>);

    grunt.initConfig({
        // configurable paths
        yeogurt: {
            dev: 'dev',
            server: 'dev/.server',
            dist: 'dist'
        },
        <% if (useFTP) { %>// Create holder object for FTP deployment credentials
        secret: {},<% } %>
        // Create dashboard data object as a placeholder for the 'build-dashboard' task
        dashboardData: {},
        watch: {
            options: {
                spawn: true,
                livereload: false
            },
            jade: {
                files: [
                    '<%%= yeogurt.dev %>/markup/{,*/}{,*/}*.jade'<% if (useDashboard) { %>,
                    '<%%= yeogurt.dev %>/dashboard/markup/{,*/}{,*/}*.jade'<% } %>
                ],
                tasks: [
                    'newer:copy:server',<% if (useDashboard) { %>
                    'build-dashboard',<% } %>
                    'jade:server',<% if (useDashboard) { %>
                    'jade:serverDashboard',<% } %>
                    'clean:temp'
                ]
            },<% if (cssOption === 'SCSS') { %>
            sass: {
                files: ['<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:server']
            },<% if (useDashboard) { %>
            sassDash: {
                files: ['<%%= yeogurt.dev %>/dashboard/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:serverDashboard']
            },<% } %><% } %><%if (cssOption === 'LESS') { %>
            less: {
                files: ['<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.less'],
                tasks: ['less:server']
            },
            <% if (useDashboard) { %>
            lessDash: {
                files: ['<%%= yeogurt.dev %>/dashboard/styles/{,*/}{,*/}*.less'],
                tasks: ['less:serverDashboard']
            },<% } %><% } %>
            js: {
                files: [
                    '<%%= yeogurt.dev %>/scripts/{,*/}{,*/}*.js',
                    '<%%= yeogurt.dev %>/bower_components/{,*/}{,*/}*.js'<% if (useDashboard) { %>,
                    '<%%= yeogurt.dev %>/dashboard/{,*/}{,*/}*.js'<% } %>
                ],
                tasks: [<% if (jshint) { %>
                    'newer:jshint',<% } %><% if (jsOption === 'Browserify') { %>
                    'browserify:server',
                    'exorcise:server',<% } %>
                    'newer:copy:server'
                ]
            },
            images: {
                files: ['<%%= yeogurt.dev %>/images/{,*/}{,*/}*.{png,jpg,gif}'],
                tasks: ['newer:copy:server']
            },
            root: {
                files: [
                    '<%%= yeogurt.dev %>/*.{ico,png,txt,html}',<% if (extras.indexOf(htaccess) !== -1) { %>
                    '<%%= yeogurt.dev %>/.htaccess',<% } %>
                    '<%%= yeogurt.dev %>/images/{,*/}*.{webp}',
                    '<%%= yeogurt.dev %>/styles/fonts/{,*/}*.*'
                ],
                tasks: ['newer:copy:server']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeogurt.dev %>/*.{ico,png,txt,html}'<% if (extras.indexOf(htaccess) !== -1) { %>,
                    '<%%= yeogurt.dev %>/.htaccess'<% } %>,
                    '<%%= yeogurt.server %>/styles/fonts/{,*/}*.*'<% if (useDashboard) { %>,
                    '<%%= yeogurt.server %>/markup/{,*/}*.html',
                    '<%%= yeogurt.server %>/dashboard/markup/{,*/}*.html',
                    '<%%= yeogurt.server %>/dashboard/styles/{,*/}*.css',
                    '<%%= yeogurt.server %>/dashboard/scripts/{,*/}*.js'<% } else { %>,
                    '<%%= yeogurt.server %>/{,*/}*.html'<% } %><% if (cssOption === 'SCSS') { %>,
                    '<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.{sass,scss}'<% } %><% if (cssOption === 'LESS') { %>,
                    '<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.less'<% } %>,
                    '<%%= yeogurt.server %>/scripts/{,*/}{,*/}*.js',
                    '<%%= yeogurt.server %>/images/{,*/}{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9010,
                livereload: 35729,
                hostname: '127.0.0.1'
            },
            livereload: {
                options: {<% if (useDashboard) { %>
                    open: 'http://127.0.0.1:9010/.server/dashboard/index.html',<% } else { %>
                    open: 'http://127.0.0.1:9010/.server/index.html',<% } %>
                    base: '<%%= yeogurt.dev %>'
                }
            },
            test: {
                options: {
                    port: 9011,
                    base: [
                        'test',
                        '<%%= yeogurt.dev %>'
                    ]
                }
            },
            dist: {
                options: {
                    <% if (useDashboard) { %>
                    open: 'http://127.0.0.1:9010/dashboard/index.html',<% } else { %>
                    open: 'http://127.0.0.1:9010/index.html',<% } %>
                    base: '<%%= yeogurt.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            server: ['<%%= yeogurt.server %>/', '<%%= yeogurt.dev %>/.server/tmp'],
            dist: ['<%%= yeogurt.dist %>/', '<%%= yeogurt.dev %>/.server/tmp'],
            temp: [
                '<%%= yeogurt.dev %>/.server/tmp/**',
                '.tmp'
            ]
        },<% if (cssOption === 'None (Vanilla CSS)') { %>
        uncss: {
            dist: {
                files: {
                    '<%%= yeogurt.dist %>/styles/main.css': [<% if (!useDashboard) { %>'<%%= yeogurt.dist %>/index.html', <% } %>'<%%= yeogurt.dist %>/markup/pages/*.html']
                }
            }
        },<% } %>
        // Karma testing framework configuration options
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        // Put files not handled in other tasks here
        copy: {
            server: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'scripts/{,*/}{,*/}*.js'<% if (jsOption === 'Browserify') { %>,
                        '!scripts/app.js',
                        '!scripts/main.js'<% } %>
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'images/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'bower_components/**/*.js',
                        'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                        'bower_components/jquery/*.map'
                    ]
                },<% if (cssOption === 'None (Vanilla CSS)') { %> {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'styles/{,*/}{,*/}*.css',
                        'bower_components/bootstrap/dist/css/*.{css,map}'
                    ]
                },<% } %><% if (useDashboard) { %> {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.server %>/',
                    src: [
                        'dashboard/images/**'
                    ]
                },<% } %> {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dev %>/.server/tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dist %>/',
                    src: [
                        <% if (jsOption === 'RequireJS') { %>'bower_components/requirejs/require.js',<% } %>
                        'bower_components/modernizr/modernizr.js',
                        'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',
                        'bower_components/jquery/jquery.min.*'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/scripts',
                    dest: '<%%= yeogurt.dist %>/scripts',
                    src: [
                        'scripts/modules/inline-*.*', '!*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dist %>/',
                    src: [
                        '*.{ico,png,txt,html}',
                        '.htaccess',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*'
                    ]
                },<% if (cssOption === 'SCSS') { %> {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/styles',
                    dest: '<%%= yeogurt.dist %>/styles',
                    src: [
                        '{,*/}{,*/}*.scss'
                    ]
                },<% } %><% if (useDashboard) { %> {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dist %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dist %>/',
                    src: [
                        'dashboard/images/{,*/}*.{webp}'
                    ]
                }, <% } %>{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dev %>/.server/tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }]
            }
        },
        jade: {
            server: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: true
                    }
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/markup/pages/',
                dest: '<%%= yeogurt.server %>/',
                src: ['*.jade'<% if (useDashboard) {%>,
                    '../../.server/tmp/markup/templates/*.jade',
                    '!../../.server/tmp/markup/base.jade',
                    '../../.server/tmp/markup/components/*-*.jade',
                    '../../.server/tmp/markup/helpers/*-*.jade'
                <% } %>],
                ext: '.html',
                rename: function(dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('../../.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },<% if (useDashboard) { %>
            serverDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeogurt.server %>/dashboard/index.html': ['<%%= yeogurt.dev %>/dashboard/markup/pages/index.jade']
                }
            },<% } %>
            dist: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: false
                    }
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/markup/pages/',
                dest: '<%%= yeogurt.dist %>/',
                src: ['*.jade'<% if (useDashboard) {%>,
                    '../../.server/tmp/markup/templates/*.jade',
                    '!../../.server/tmp/markup/base.jade',
                    '../../.server/tmp/markup/components/*-*.jade',
                    '!../../.server/tmp/markup/components/head.jade',
                    '../../.server/tmp/markup/helpers/*-*.jade'
                <% } %>],
                ext: '.html',
                rename: function(dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('../../.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },<% if (useDashboard) { %>
            distDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeogurt.dist %>/dashboard/index.html': ['<%%= yeogurt.dev %>/dashboard/markup/pages/index.jade']
                }
            }<% } %>
        },<% if (jshint) { %>
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            test: [
                'Gruntfile.js',
                '<%%= yeogurt.dev %>/scripts/{,*/}{,*/}*.js',<% if (useDashboard) { %>
                '<%%= yeogurt.dev %>/dashboard/scripts/{,*/}{,*/}*.js',<% } %>
                '!<%%= yeogurt.dev %>/scripts/vendor/{,*/}*'
            ]
        },<% } %>
        'string-replace': {<% if (cssOption === 'SCSS') { %>
            sassMapFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: /\.\.\/\.\.\/dev\/styles\//g,
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/styles/main.css.map': '<%%= yeogurt.dist %>/styles/main.css.map'
                }
            },<% } %><% if (useDashboard) { %>
            dashboardLinkFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: /\"\.\.\/\.\.\/scripts\//g,
                            replacement: '"scripts/'
                        }, {
                            pattern: /\"\.\.\/\.\.\/styles\//g,
                            replacement: '"styles/'
                        }, {
                            pattern: /\"\.\.\/\.\.\/images\//g,
                            replacement: '"images/'
                        }
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/index.html': '<%%= yeogurt.dist %>/index.html'
                }
            },
            dashboardLinkFixServer: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: /\"\.\.\/\.\.\/scripts\//g,
                            replacement: '"scripts/'
                        }, {
                            pattern: /\"\.\.\/\.\.\/styles\//g,
                            replacement: '"styles/'
                        }, {
                            pattern: /\"\.\.\/\.\.\/images\//g,
                            replacement: '"images/'
                        }
                    ]
                },
                files: {
                    '<%%= yeogurt.server %>/index.html': '<%%= yeogurt.server %>/index.html'
                }
            }<% } %>
        },
        // gzip assets 1-to-1 for production
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    pretty: true,
                    archive: '<%%= yeogurt.dist %>/build.zip'
                },
                expand: true,
                cwd: '<%%= yeogurt.dist %>/',
                src: ['*/**', '!**/*.zip', '!**/*.psd', '!**/.git', '!**/.svn']
            }
        },<% if (useFTP) { %>
        ftpush: {
            build: {
                simple: true,
                auth: {
                    host: '<%%= secret.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: '<%%= yeogurt.dist %>',
                dest: '<%%= secret.serverPath %>',
                exclusions: ['*.svn', '.svn/', '.svn', '*.git', '.git/', '.git'],
                server_sep: '/'
            }
        },<% } %>
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: true,
                    sourceMapIncludeSources: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dist %>/bower_components/',
                dest: '<%%= yeogurt.dist %>/bower_components/',
                src: [<% if (jsOption === 'RequireJS') { %>
                    'requirejs/require.js',<% } %>
                    'modernizr/modernizr.js'
                ],
                ext: '.js'
            },<% if (jsOption !== 'None (Vanilla JavaScript)') { %>
            distJS: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: true,
                    sourceMapIncludeSources: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/scripts/',
                dest: '<%%= yeogurt.dist %>/scripts/',
                src: ['{,*/}{,*/}*.js', '!*.js'],
                ext: '.js'
            }<% } %><% if (jsOption === 'Browserify') { %>,
            distBrowserify: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                },
                expand: true,
                cwd: '<%%= yeogurt.dist %>/scripts/',
                dest: '<%%= yeogurt.dist %>/scripts/',
                src: ['main.js']
            }<% } %>
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeogurt.dist %>/images'
                }]
            }<% if (useDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeogurt.dist %>/dashboard/images'
                }]
            }<% } %>
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeogurt.dist %>/images'
                }]
            }<% if (useDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeogurt.dist %>/dashboard/images'
                }]
            }<% } %>
        },
        htmlmin: {
            dist: {
                options: {
                    removeEmptyAttributes: true
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dist %>',
                    src: [
                        '*.html', 'markup/{,*/}{,*/}*.html'<% if (useDashboard) { %>,
                        'dashboard/markup/{,*/}{,*/}*.html'<% } %>
                    ],
                    dest: '<%%= yeogurt.dist %>'
                }]
            }
        },<% if (ieSupport && cssOption === 'None (Vanilla CSS)' && useDashboard) { %>
        cssmin: {
            serverDashboard: {
                files: {
                    '<%%= yeogurt.server %>/dashboard/styles/main.css': ['<%%= yeogurt.dev %>/dashboard/styles/main.css']
                }
            },
            distDashboard: {
                files: {
                    '<%%= yeogurt.dist %>/dashboard/styles/main.css': ['<%%= yeogurt.dev %>/dashboard/styles/main.css']
                }
            }
        },<% } %><% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        useminPrepare: {
            html: '<%%= yeogurt.dist %>/<% if (useDashboard) { %>markup/pages/<% } %>index.html',
            options: {
                root: '<%%= yeogurt.dev %><% if (useDashboard) { %>/markup/pages/<% } %>',
                dest: '<%%= yeogurt.dist %><% if (useDashboard) { %>/markup/pages/<% } %>'
            }
        },
        usemin: {
            html: '<%%= yeogurt.dist %>/<% if (useDashboard) { %>markup/pages/<% } %>index.html',
            css: ['<%%= yeogurt.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%%= yeogurt.dev %>', '<%%= yeogurt.dev %>/images']
            }
        },<% } %><% if (jsOption === 'Browserify') { %>
        browserify: {
            server: {
                options: {
                    bundleOptions: {
                        debug: true
                    }
                },
                files: {
                    '<%%= yeogurt.server %>/scripts/main.js': ['<%%= yeogurt.dev %>/scripts/main.js']
                }
            },
            dist: {
                options: {
                    bundleOptions: {
                        debug: true
                    }
                },
                files: {
                    '<%%= yeogurt.dist %>/scripts/main.js': ['<%%= yeogurt.dev %>/scripts/main.js']
                }
            }
        },
        exorcise: {
            server: {
                options: {},
                files: {
                    '<%%= yeogurt.server %>/scripts/main.js.map': ['<%%= yeogurt.server %>/scripts/main.js'],
                }
            },
            dist: {
                options: {},
                files: {
                    '<%%= yeogurt.dist %>/scripts/main.js.map': ['<%%= yeogurt.dist %>/scripts/main.js'],
                }
            }
        },<% } %><% if (jsOption === 'RequireJS') { %>
        requirejs: {
            dist: {
                options: {
                    name: 'main',
                    baseUrl: '<%%= yeogurt.dev %>/scripts/',
                    mainConfigFile: '<%%= yeogurt.dev %>/scripts/main.js',
                    out: '<%%= yeogurt.dist %>/scripts/main.js',
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                }
            }
        },<% } %><% if (cssOption === 'SCSS') { %>
        sass: {
            server: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.server %>/styles/main.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.server %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
                }
            },<% if (ieSupport) { %>
            serverPrint: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.server %>/styles/print.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.server %>/styles/print.css': '<%%= yeogurt.dev %>/styles/print.scss'
                }
            },<% } %><% if (useDashboard) { %>
            serverDashboard: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.server %>/dashboard/styles/main.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/dashboard/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.server %>/dashboard/styles/main.css': '<%%= yeogurt.dev %>/dashboard/styles/main.scss'
                }
            },<% } %>
            dist: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.dist %>/styles/main.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
                }
            },<% if (ieSupport) { %>
            distPrint: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.server %>/styles/print.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/styles/print.css': '<%%= yeogurt.dev %>/styles/print.scss'
                }
            },<% } %><% if (useDashboard) { %>
            distDashboard: {
                options: {
                    sourceComments: 'map',
                    outputStyle: 'compressed',
                    sourceMap: '<%%= yeogurt.dist %>/dashboard/styles/main.css.map',
                    includePaths: [
                        '<%%= yeogurt.dev %>/dashboard/styles/{,*/}*.scss'
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/dashboard/styles/main.css': '<%%= yeogurt.dev %>/dashboard/styles/main.scss'
                }
            }<% } %>
        },<% } %><% if (cssOption === 'LESS') { %>
        less: {
            server: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.server %>/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeogurt.server %>/styles/',
                    sourceMapRootpath: '',
                    dumpLineNumbers: 'comments',
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'styles/main.less'
                ],
                ext: '.css'
            },<% if (ieSupport) { %>
            serverPrint: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.server %>/styles/print.css.map',
                    sourceMapBasepath: '<%%= yeogurt.server %>/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'styles/print.less'
                ],
                ext: '.css'
            },<% } %><% if (useDashboard) { %>
            serverDashboard: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.server %>/dashboard/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeogurt.server %>/dashboard/styles/',
                    sourceMapRootpath: '',
                    dumpLineNumbers: 'comments',
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            },<% } %>
            dist: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.dist %>/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeogurt.dist %>/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    'styles/main.less'
                ],
                ext: '.css'
            },<% if (ieSupport) { %>
            distPrint: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.dist %>/styles/print.css.map',
                    sourceMapBasepath: '<%%= yeogurt.dist %>/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    'styles/print.less'
                ],
                ext: '.css'
            }<% } %><% if (useDashboard) { %>,
            distDashboard: {
                options: {
                    paths: ['<%%= yeogurt.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeogurt.dist %>/dashboard/styles/main.css.map',
                    sourceMapBasepath: '<%%= yeogurt.dist %>/dashboard/styles/',
                    sourceMapRootpath: './',
                    compress: true,
                    outputSourceFiles: true
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            }<% } %>
        }<% } %>
    });
    <% if (useFTP) { %>
    grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function() {
        var ftpJSON = grunt.file.readJSON('.ftppass');
        if (ftpJSON.host === '') {
            grunt.log.error('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
        } else {
            grunt.config.set('secret', ftpJSON);
            grunt.task.run(['ftpush']);
        }
    });<% } %>
    <% if (useDashboard) { %>
    grunt.registerTask('build-dashboard', 'Runs through project Jade files and gathers needed data to build the dashboard', function() {
        var done = this.async(),
            itemsArray = [],
            dashData = {},
            pageData,
            templateData,
            componentData,
            helpersData;
        var updatePath = function(path, strToRemove) {
            return path.replace(strToRemove, '..');
        };
        var toTitleCase = function(str) {
            return str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
        var convertDashes = function(str) {
            return str.replace('-', ' ');
        };
        var removeSymbols = function(str) {
            var tempStr = str.replace('!##', '');
            return tempStr.replace('##!', '');
        };
        var getJSON = function(data) {
            if (data) {
                var dataStr = data.trim().replace(/ /g, '');
                return JSON.parse(dataStr);
            }
        };
        var recursiveParse = function(path, type, namePath, fileExt) {
            var extraData = [],
                nameData;
            itemsArray = []; // reset items array
            grunt.file.recurse(path, function(abspath) {
                if (abspath.indexOf(fileExt) > -1) {
                    var data = parseFiles(abspath, type);
                    if (data) {
                        extraData.push(data);
                    }
                    nameData = findJadeNames(abspath, type, namePath, extraData);
                }
            });
            return nameData;
        };
        var findJadeNames = function(path, type, strToRemove, data) {
            var titleArray = path.split('/'),
                title = titleArray[(titleArray.length - 1)],
                newPath,
                dataObj;
            if (type === 'module' || type === 'component') {
                newPath = updatePath(path.replace('.jade', '-' + type + '.html'), strToRemove);
            }
            else {
                newPath = updatePath(path.replace('jade', 'html'), strToRemove);
            }
            dataObj = {
                path: newPath,
                title: toTitleCase(convertDashes(title.replace('.jade', '')))
            };
            itemsArray.push(_.extend(dataObj, data[itemsArray.length]));
            return {
                links: itemsArray
            };
        };
        var parseFiles = function(path, type) {
            var file = grunt.file.read(path),
                regex = /!##([^;]*?)##!/g,
                markupRegex = /"markup": "([^;]*?)"/g,
                markupRegexAfter = /,"markup":"([^;]*?)"/g,
                fileMarkupMatch = file.match(regex),
                fileData;
            if (fileMarkupMatch) {
                // Grab only first instance of data and remove !## ##! symbols
                fileMarkupMatch = removeSymbols(fileMarkupMatch[0]);
                // Find markup property, remove "markup" key as well as any double quotes (") so we have a clean set of markup
                var markup = fileMarkupMatch.match(markupRegex);
                // Check to see if markup exists
                if (markup) {
                    markup = markup[0].replace('"markup": ', '').replace(/\"/g, '');
                } else {
                    markup = 'p. No Markup Found';
                }
                // Remove all newline statements (\n), any tabs, any extra space, and the entire "markup" key
                fileData = fileMarkupMatch.replace(/\n/g, '').replace(/ /g, '').replace(/\t/g, '').replace(markupRegexAfter, '');
                if (type === 'module' || type === 'component') {
                    grunt.file.write(path.replace('.jade', '-' + type + '.jade'), 'extend ../base\nblock template\n' + markup);
                } else if (type === 'template') {
                    var JSONData = getJSON(fileMarkupMatch),
                        fileTemp = file;
                    JSONData.blocks.forEach(function(element) {
                        var pattern = new RegExp('block ' + (element.blockName ? element.blockName : 'Block name not configured') + '\\s'),
                            fpoReplacement = '| <div class="fpo-container" style="width:' + (element.width ? element.width : '100px') + '; height:' + (element.height ? element.height : '100px') + ';"> <div class="fpo-background" style="width:100%;height:100%;background-color:' + (element.bgcolor ? element.bgcolor : '#f7f7f7') + '"><span class="fpo-name" style="line-height:' + (element.height ? element.height : '100px') + ';color:' + (element.textColor ? element.textColor : '#fff') + ';font-size:' + (element.fontSize ? element.fontSize : '10px') + ';text-align:center;display:inline-block;width:100%;">block ' + (element.blockName ? element.blockName : 'Block name not configured') + '</span></div></div>\n';
                        fileTemp = fileTemp.replace(pattern, fpoReplacement);
                    });
                    grunt.file.write(path, fileTemp);
                } else if (type !== 'page') {
                    grunt.log.error('Something went wrong when parsing jade files');
                }
                return getJSON(fileData);
            } else {
                grunt.log.writeln(['Skipping/No data found for: ' + path]);
            }
        };
        // Go through jade pages
        pageData = recursiveParse('dev/markup/pages', 'page', 'dev/markup/pages', '.jade');
        // Go through jade templates
        templateData = recursiveParse('dev/.server/tmp/markup/templates', 'template', 'dev/.server/tmp', '.jade');
        // Go through jade components
        componentData = recursiveParse('dev/.server/tmp/markup/components', 'component', 'dev/.server/tmp', '.jade');
        // Go through jade modules
        helpersData = recursiveParse('dev/.server/tmp/markup/helpers', 'module', 'dev/.server/tmp', '.jade');
        // Setup all parsed data to be passed to jade templates
        dashData = {
            pages: pageData,
            templates: templateData,
            components: componentData,
            helpers: helpersData
        };
        // Set dashboard data variable to be used by Jade task
        grunt.config(['dashboardData'], dashData);
        // Finish task
        done();
    });<% } %>

    grunt.registerTask('serve', 'Open a development server within your browser', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:server'<% if (useDashboard) { %>,
            'build-dashboard'<% } %><% if (jshint) { %>,
            'jshint:test'<% } %><% if (jsOption === 'Browserify') { %>,
            'browserify:server',
            'exorcise:server'<% } %>,
            'jade:server'<% if (useDashboard) { %>,
            'jade:serverDashboard',
            'string-replace:dashboardLinkFixServer'<% } %><% if (cssOption === 'LESS') { %>,
            'less:server'<% if (ieSupport) { %>,
            'less:serverPrint'<% } %><% if (useDashboard) { %>,
            'less:serverDashboard'<% } %><% } %><% if (cssOption === 'SCSS') { %>,
            'sass:server'<% if (ieSupport) { %>,
            'sass:serverPrint'<% } %><% if (useDashboard) { %>,
            'sass:serverDashboard'<% } %><% } %>,
            <% if (cssOption === 'None (Vanilla CSS)' && useDashboard) { %>
            'cssmin:serverDashboard',<% } %>
            'clean:temp',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',<% if (useDashboard) { %>
        'build-dashboard',<% } %><% if (jsOption === 'Browserify') { %>
        'browserify:dist',
        'exorcise:dist',<% } %>
        'imagemin',
        'svgmin',
        'jade:dist',<% if (useDashboard) { %>
        'jade:distDashboard',<% } %><% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        'useminPrepare',<% } %><% if (cssOption === 'LESS') { %>
        'less:dist',<% if (ieSupport) { %>
        'less:distPrint',<% } %><% if (useDashboard) { %>
        'less:distDashboard',<% } %><% } %><% if (cssOption === 'SCSS') { %>
        'sass:dist',<% if (ieSupport) { %>
        'sass:distPrint',<% } %><% if (useDashboard) { %>
        'sass:distDashboard',<% } %>
        'string-replace:sassMapFixDist',<% } %><% if (jsOption === 'RequireJS') { %>
        'requirejs',<% } %><% if (useDashboard) { %>
        'string-replace:dashboardLinkFixDist',<% } %><% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        'concat:generated',<% if (cssOption === 'None (Vanilla CSS)') { %><% if (useDashboard) { %>
        'cssmin:distDashboard',<% } %>
        'cssmin:generated',<% } %>
        'usemin',<% } %>
        'htmlmin:dist',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'uncss',<% } %>
        'uglify',
        'clean:temp'
    ]);
    <% if (jshint) { %>
    grunt.registerTask('test', 'Peform tests on JavaScript', [
        'jshint:test',
        'connect:test',
        'karma:unit'
    ]);<% } %>

    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress'
    ]);
    <% if (useFTP) { %>
    grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
        'zip',
        'ftpinfo'
    ]);<% } %>

    grunt.registerTask('default', 'Defaults to building a production ready version of your site.', [
        'test',
        'build'
    ]);

};