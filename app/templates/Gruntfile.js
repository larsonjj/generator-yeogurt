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
                    base: '<%%= yeoman.dev %>'
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
                    dot: true,
                    cwd: '<%%= yeoman.dev %>',
                    dest: '<%%= yeoman.server %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
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
                dest: '<%%= yeoman.server %>',
                src: ['<%%= yeoman.dev %>/markup/pages/*.jade']
            }
        }
    });

    grunt.registerTask('server', 'Open a developement server within your browser', [
        'clean:server',
        'copy:server',
        'jade:server',
        'build',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', 'Build a production ready version of your site.', function () {

    });
};