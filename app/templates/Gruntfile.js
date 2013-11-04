// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
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
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= yeoman.dev %>/*.html',
                    '<%%= yeoman.dev %>/scripts/{,*/}*.js',
                    '<%%= yeoman.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
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
                }]
            },
            bower: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'bower_components/requirejs/require.js',
                        'bower_components/modernizr/modernizr.js'
                    ]
                }]
            },
            cssFiles: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/styles',
                    dest: '<%%= yeoman.server %>/styles',
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
            }
        },
        'string-replace': {
            sassMapFix: {
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
            lessMainFix: {
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
            lessMapFix: {
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
            }
        },
        requirejs: {
            dist: {
                options: {
                    name: 'main',
                    baseUrl: '<%%= yeoman.dev %>/scripts/',
                    mainConfigFile: '<%%= yeoman.dev %>/scripts/main.js',
                    out: '<%%= yeoman.server %>/scripts/main.min.js',
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
            }
        }<% } %><% if (cssOption === 'LESS') { %>,
        less: {
            server: {
                options: {
                    paths: ['<%%= yeoman.dev %>/'],
                    sourceMap: true,
                    sourceMapFilename: '<%%= yeoman.server %>/styles/main.css.map',
                    sourceMapBasepath: './',
                    sourceMapRootpath: './'
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['styles/*.less'],
                ext: '.css'
            }
        }<% } %>
    });

    grunt.registerTask('server', 'Open a developement server within your browser', [
        'clean:server',
        'copy:server',
        'copy:bower',
        'copy:cssFiles',
        'jade:server',<% if (cssOption === 'LESS') { %>
        'less:server',
        'string-replace:lessMapFix',
        'string-replace:lessMainFix',<% } %><% if (cssOption === 'SASS') { %>
        'sass:server',
        'string-replace:sassMapFix',<% } %>
        'requirejs',
        'build',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', 'Build a production ready version of your site.', function () {

    });
};