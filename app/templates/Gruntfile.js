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
    require('jit-grunt')(grunt<% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>, {
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
        watch: {
            options: {
                spawn: true,
                livereload: false
            },
            jade: {
                files: [
                    '<%%= yeogurt.dev %>/views/{,*/}{,*/}*.jade'
                ],
                tasks: [
                    'newer:copy:server',
                    'jade:server',
                    'dashboard:server',
                    'clean:temp'
                ]
            },<% if (cssOption === 'SCSS') { %>
            sass: {
                files: ['<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:server']
            },<% } else if (cssOption === 'LESS') { %>
            less: {
                files: ['<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.less'],
                tasks: ['less:server']
            },<% } %>
            js: {
                files: [
                    '<%%= yeogurt.dev %>/scripts/{,*/}{,*/}*.js',
                    '<%%= yeogurt.dev %>/bower_components/{,*/}{,*/}*.js'
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
                    '<%%= yeogurt.server %>/styles/fonts/{,*/}*.*',
                    '<%%= yeogurt.server %>/{,*/}*.html'<% if (cssOption === 'SCSS') { %>,
                    '<%%= yeogurt.dev %>/styles/{,*/}{,*/}*.{sass,scss}'<% } else if (cssOption === 'LESS') { %>,
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
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: 'http://0.0.0.0:9010/.server/index.html',
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
                    open: 'http://0.0.0.0:9010/index.html',
                    base: '<%%= yeogurt.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            server: ['<%%= yeogurt.server %>/'],
            dist: ['<%%= yeogurt.dist %>/'],
            temp: [
                '.tmp'
            ]
        },<% if (useDashboard) { %>
        dashboard: {
            server: {
                options: {
                    debug: true,
                    logo: 'images/yeogurt-logo.png',
                    generatedDir: '<%%= yeogurt.server %>/dashboard/generated',
                    assets: [
                        '<%%= yeogurt.dev %>/views/components/*.jade',
                        '<%%= yeogurt.dev %>/views/helpers/*.jade'
                    ]
                },
                files: {
                    '<%%= yeogurt.server %>/dashboard/index.html': [
                        '<%%= yeogurt.server %>/*.html',
                        '<%%= yeogurt.dev %>/views/components/*.jade',
                        '<%%= yeogurt.dev %>/views/helpers/*.jade'
                    ]
                }
            },
            dist: {
                options: {
                    debug: false,
                    logo: 'images/yeogurt-logo.png',
                    generatedDir: '<%%= yeogurt.dist %>/dashboard/generated',
                    assets: [
                        '<%%= yeogurt.dev %>/views/components/*.jade',
                        '<%%= yeogurt.dev %>/views/helpers/*.jade'
                    ]
                },
                files: {
                    '<%%= yeogurt.dist %>/dashboard/index.html': [
                        '<%%= yeogurt.dist %>/*.html',
                        '<%%= yeogurt.dev %>/views/components/*.jade',
                        '<%%= yeogurt.dev %>/views/helpers/*.jade'
                    ]
                }
            }
        },<% } %><% if (cssOption === 'None (Vanilla CSS)') { %>
        uncss: {
            dist: {
                files: {
                    '<%%= yeogurt.dist %>/styles/main.css': ['<%%= yeogurt.dist %>/views/*.html']
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
                        'scripts/{,*/}{,*/}*.js'<% if (useDashboard) { %>,
                        'dashboard/**/*.*'<% } %><% if (jsOption === 'Browserify') { %>,
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
                }<% } %>]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/',
                    dest: '<%%= yeogurt.dist %>/',
                    src: [
                        <% if (jsOption === 'RequireJS') { %>'bower_components/requirejs/require.js',<% } %>
                        'bower_components/modernizr/modernizr.js',
                        'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',<% if (useDashboard) { %>
                        'dashboard/**/*.*',<% } %>
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
                }<% } %>]
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
                cwd: '<%%= yeogurt.dev %>/views/',
                dest: '<%%= yeogurt.server %>/',
                src: ['*.jade'],
                ext: '.html',
                rename: function(dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('../../.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },
            dist: {
                options: {
                    pretty: true,
                    client: false,
                    data: {
                        debug: false
                    }
                },
                expand: true,
                cwd: '<%%= yeogurt.dev %>/views/',
                dest: '<%%= yeogurt.dist %>/',
                src: ['*.jade'],
                ext: '.html',
                rename: function(dest, matchedSrcPath) {
                    matchedSrcPath = matchedSrcPath.replace('../../.server/tmp/', '');
                    return dest + matchedSrcPath;
                }
            },
        },<% if (jshint) { %>
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            test: [
                'Gruntfile.js',
                '<%%= yeogurt.dev %>/scripts/{,*/}{,*/}*.js',
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
            },<% } %>
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
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeogurt.dev %>/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeogurt.dist %>/images'
                }]
            }
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
                        '*.html', 'views/{,*/}{,*/}*.html'
                    ],
                    dest: '<%%= yeogurt.dist %>'
                }]
            }
        },<% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        useminPrepare: {
            html: '<%%= yeogurt.dist %>/index.html',
            options: {
                root: '<%%= yeogurt.dev %>',
                dest: '<%%= yeogurt.dist %>'
            }
        },
        usemin: {
            html: '<%%= yeogurt.dist %>/index.html',
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
            },<% } %>
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

    grunt.registerTask('serve', 'Open a development server within your browser', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:server',<% if (jshint) { %>
            'jshint:test',<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:server',
            'exorcise:server',<% } %>
            'jade:server',<% if (useDashboard) { %>
            'dashboard:server',<% } %><% if (cssOption === 'LESS') { %>
            'less:server',<% if (ieSupport) { %>
            'less:serverPrint',<% } %><% } %><% if (cssOption === 'SCSS') { %>
            'sass:server',<% if (ieSupport) { %>
            'sass:serverPrint',<% } %><% } %>
            'clean:temp',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',<% if (jsOption === 'Browserify') { %>
        'browserify:dist',
        'exorcise:dist',<% } %>
        'imagemin',
        'svgmin',
        'jade:dist',<% if (useDashboard) { %>
        'dashboard:dist',<% } %><% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        'useminPrepare',<% } %><% if (cssOption === 'LESS') { %>
        'less:dist',<% if (ieSupport) { %>
        'less:distPrint',<% } %><% } %><% if (cssOption === 'SCSS') { %>
        'sass:dist',<% if (ieSupport) { %>
        'sass:distPrint',<% } %>
        'string-replace:sassMapFixDist',<% } %><% if (jsOption === 'RequireJS') { %>
        'requirejs',<% } %><% if (jsOption === 'None (Vanilla JavaScript)' || cssOption === 'None (Vanilla CSS)') { %>
        'concat:generated',<% if (cssOption === 'None (Vanilla CSS)') { %>
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