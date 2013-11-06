// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
/*jshint camelcase: false */
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            dev: 'dev',
            server: 'server',
            dist: 'dist'
        },
        watch: {
            options: {
                nospawn: false
            },
            jade: {
                files: ['<%%= yeoman.dev %>/markup/{,*/}{,*/}*.jade'],
                tasks: ['jade:server']
            }<% if (cssOption === 'SASS') { %>,
            sass: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['sass:server', 'copy:server']
            }<% } %><% if (cssOption === 'LESS') { %>,
            less: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.less'],
                tasks: ['less:server', 'copy:server']
            }<% } %>,
            js: {
                files: ['<%%= yeoman.dev %>/scripts/{,*/}{,*/}*.js', '<%%= yeoman.dev %>/bower_components/{,*/}{,*/}*.js'],
                tasks: ['copy:server'<% if (jshint) { %>, 'jshint'<% } %>]
            },
            images: {
                files: ['<%%= yeoman.dev %>/images/{,*/}{,*/}*.{png,jpg,gif}'],
                tasks: ['copy:server']
            },
            root: {
                files: [
                    '<%%= yeoman.dev %>/*.{ico,png,txt,html}',
                    '<%%= yeoman.dev %>/.htaccess',
                    '<%%= yeoman.dev %>/images/{,*/}*.{webp}',
                    '<%%= yeoman.dev %>/styles/fonts/{,*/}*.*'
                ],
                tasks: ['copy:server']
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.server %>/*.{ico,png,txt,html}',
                    '<%%= yeoman.server %>/.htaccess',
                    '<%%= yeoman.server %>/styles/fonts/{,*/}*.*',
                    '<%%= yeoman.server %>/markup/{,*/}{,*/}*.html',
                    '<%%= yeoman.server %>/styles/{,*/}{,*/}*.css'<% if (cssOption === 'SASS') { %>,
                    '<%%= yeoman.server %>/styles/{,*/}{,*/}*.{sass,scss}'<% } %><% if (cssOption === 'LESS') { %>,
                    '<%%= yeoman.server %>/styles/{,*/}{,*/}*.less'<% } %>,
                    '<%%= yeoman.server %>/scripts/{,*/}{,*/}*.js',
                    '<%%= yeoman.server %>/images/{,*/}{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: '<%%= yeoman.server %>'
                }
            }
        },
        clean: {
            server: ['<%%= yeoman.server %>/'],
            dist: ['<%%= yeoman.dist %>/']
        },
        // Put files not handled in other tasks here
        copy: {
            server: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        '*.{ico,png,txt,html}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'images/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'bower_components/{,*/}{,*/}*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/styles',
                    dest: '<%%= yeoman.server %>/styles',
                    src: [
                        '{,*/}{,*/}*.{scss,less}'
                    ]
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'bower_components/requirejs/require.js',
                        'bower_components/modernizr/modernizr.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/styles',
                    dest: '<%%= yeoman.dist %>/styles',
                    src: [
                        '{,*/}{,*/}*.{scss,less}'
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
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['markup/pages/*.jade'],
                ext: '.html'
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
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['markup/pages/*.jade'],
                ext: '.html'
            }
        }<% if (jshint) { %>,
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%%= yeoman.server %>/scripts/{,*/}{,*/}*.js',
                '!<%%= yeoman.server %>/scripts/vendor/{,*/}*',
            ]
        }<% } %>,
        'string-replace': {
            sassMapFixServer: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '../../dev/styles/',
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.server %>/styles/main.css.map' : '<%%= yeoman.server %>/styles/main.css.map'
                }
            },
            lessMainFixServer: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '=./server/styles/',
                            replacement: '='
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.server %>/styles/main.css' : '<%%= yeoman.server %>/styles/main.css'
                }
            },
            lessMapFixServer: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: './dev/styles/',
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.server %>/styles/main.css.map' : '<%%= yeoman.server %>/styles/main.css.map'
                }
            },
            sassMapFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '../../dev/styles/',
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/styles/main.css.map' : '<%%= yeoman.dist %>/styles/main.css.map'
                }
            },
            lessMainFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '=./dist/styles/',
                            replacement: '='
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/styles/main.css' : '<%%= yeoman.dist %>/styles/main.css'
                }
            },
            lessMapFixDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: './dev/styles/',
                            replacement: ''
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/styles/main.css.map' : '<%%= yeoman.dist %>/styles/main.css.map'
                }
            },
            requireDist: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: 'data-main="../../scripts/main"',
                            replacement: 'data-main="../../scripts/main.min"'
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/markup/pages/index.html' : '<%%= yeoman.dist %>/markup/pages/index.html'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 5 versions', '> 1%', 'ff 17', 'opera 11.1', 'ie 8']
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.server %>/styles',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.server %>/styles'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>/styles',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.dist %>/styles'
                }]
            }
        },
        // gzip assets 1-to-1 for production
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    pretty: true,
                    archive: '<%%= yeoman.dist %>/build.zip'
                },
                expand: true,
                cwd: '<%%= yeoman.dist %>/',
                src: ['*/**', '*.{txt,html}', '!**/*.zip', '!**/*.psd', '!**/.git/']
            }
        },
        // don't keep passwords in source control
        'ftp-deploy': {
            build: {
                auth: {
                    host: '<%%= secret.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: '<%%= yeoman.dist %>',
                dest: '<%%= secret.serverPath %>',
                exclusions: ['*.svn', '.svn/', '.svn', '*.git', '.git/', '.git'],
                server_sep: '/'
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                },
                expand: true,
                cwd: '<%%= yeoman.dist %>/bower_components/',
                dest: '<%%= yeoman.dist %>/bower_components/',
                src: ['{,*/}{,*/}*.js'],
                ext: '.js'
            }
        },
        requirejs: {
            dist: {
                options: {
                    name: 'main',
                    baseUrl: '<%%= yeoman.dev %>/scripts/',
                    mainConfigFile: '<%%= yeoman.dev %>/scripts/main.js',
                    out: '<%%= yeoman.dist %>/scripts/main.min.js',
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                }
            }
        }<% if (cssOption === 'SASS') { %>,
        sass: {
            server: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    sourcemap: true,
                    trace: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['styles/*.scss'],
                ext: '.css'
            },
            dist: {
                options: {
                    style: 'compressed',
                    lineNumbers: false,
                    sourcemap: true,
                    trace: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['styles/*.scss'],
                ext: '.css'
            }
        }<% } %><% if (cssOption === 'LESS') { %>,
        less: {
            server: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.server %>/styles/main.css.map',
                    sourceMapBasepath: './',
                    sourceMapRootpath: './',
                    dumpLineNumbers: 'comments'
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['styles/*.less'],
                ext: '.css'
            },
            dist: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.dist %>/styles/main.css.map',
                    sourceMapBasepath: './',
                    sourceMapRootpath: './',
                    compress: true
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['styles/*.less'],
                ext: '.css'
            }
        }<% } %>
    });

    grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function () {
        var ftpJSON = grunt.file.readJSON('.ftppass');
        if (ftpJSON.host === '') {
            console.log('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
        }
        else {
            grunt.config.set('secret', ftpJSON);
            grunt.task.run(['ftp-deploy']);
        }
    });

    grunt.registerTask('server', 'Open a developement server within your browser', [
        'clean:server',
        'copy:server'<% if (jshint) { %>,
        'jshint'<% } %>,
        'jade:server',<% if (cssOption === 'LESS') { %>
        'less:server',
        'string-replace:lessMapFixServer',
        'string-replace:lessMainFixServer',<% } %><% if (cssOption === 'SASS') { %>
        'sass:server',
        'string-replace:sassMapFixServer',<% } %>
        'autoprefixer:server',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',
        'jade:dist',<% if (cssOption === 'LESS') { %>
        'less:dist',
        'string-replace:lessMapFixDist',
        'string-replace:lessMainFixDist',<% } %><% if (cssOption === 'SASS') { %>
        'sass:dist',
        'string-replace:sassMapFixDist',<% } %>
        'autoprefixer:dist',
        'requirejs',
        'string-replace:requireDist', // change require main path to 'main.min'
        'uglify'<% if (jshint) { %>,
        'jshint'<% } %>
    ]);

    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress'
    ]);

    grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
        'zip',
        'ftpinfo',
    ]);

};