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
        dashboardData: {},
        watch: {
            options: {
                nospawn: false
            },
            jade: {
                files: ['<%%= yeoman.dev %>/markup/{,*/}{,*/}*.jade', '<%%= yeoman.dev %>/dashboard/markup/{,*/}{,*/}*.jade'],
                tasks: ['any-newer:jade:server', 'any-newer:jade:serverDashboard']
            }<% if (cssOption === 'SASS') { %>,
            sass: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.{scss,sass}', '<%%= yeoman.dev %>/dashboard/styles/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['any-newer:sass:server', 'any-newer:sass:serverDashboard', 'any-newer:copy:server', 'any-newer:copy:server']
            }<% } %><% if (cssOption === 'LESS') { %>,
            less: {
                files: ['<%%= yeoman.dev %>/styles/{,*/}{,*/}*.less', '<%%= yeoman.dev %>/dashboard/styles/{,*/}{,*/}*.less'],
                tasks: ['any-newer:less:server', 'any-newer:less:serverDashboard', 'any-newer:copy:server', 'any-newer:copy:server']
            }<% } %>,
            js: {
                files: ['<%%= yeoman.dev %>/scripts/{,*/}{,*/}*.js', '<%%= yeoman.dev %>/bower_components/{,*/}{,*/}*.js'],
                tasks: ['any-newer:copy:server'<% if (jshint) { %>, 'newer:jshint'<% } %>]
            },
            images: {
                files: ['<%%= yeoman.dev %>/images/{,*/}{,*/}*.{png,jpg,gif}'],
                tasks: ['any-newer:copy:server']
            },
            root: {
                files: [
                    '<%%= yeoman.dev %>/*.{ico,png,txt,html}',
                    '<%%= yeoman.dev %>/.htaccess',
                    '<%%= yeoman.dev %>/images/{,*/}*.{webp}',
                    '<%%= yeoman.dev %>/styles/fonts/{,*/}*.*'
                ],
                tasks: ['any-newer:copy:server']
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
            server: ['<%%= yeoman.server %>/', '<%%= yeoman.dev %>/.tmp'],
            dist: ['<%%= yeoman.dist %>/', '<%%= yeoman.dev %>/.tmp'],
            temp: ['<%%= yeoman.dev %>/.tmp', '<%%= yeoman.server %>/.tmp', '<%%= yeoman.dist %>/.tmp']
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
                }<% if (haveDashboard) { %>, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.server %>/',
                    src: [
                        'dashboard/images/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dev %>/.tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }<% } %>]
            },<% if (haveDashboard) { %>
            serverDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.server %>/.tmp/markup',
                    dest: '<%%= yeoman.server %>/markup',
                    src: [
                        '{,*/}{,*/}*.html'
                    ]
                }]
            },<% } %>
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
                    cwd: '<%%= yeoman.dev %>/scripts',
                    dest: '<%%= yeoman.dist %>/scripts',
                    src: [
                        '{,*/}{,*/}*.js', '!*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        '*.{ico,png,txt,html}',
                        '.htaccess',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/styles',
                    dest: '<%%= yeoman.dist %>/styles',
                    src: [
                        '{,*/}{,*/}*.{scss,less}'
                    ]
                }<% if (haveDashboard) { %>, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'dashboard/scripts/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dist %>/',
                    src: [
                        'dashboard/images/{,*/}*.{webp}'
                    ]
                }, {
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/',
                    dest: '<%%= yeoman.dev %>/.tmp',
                    src: [
                        'markup/**', '!**markup/pages/**'
                    ]
                }<% } %>]
            }<% if (haveDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>/.tmp/markup',
                    dest: '<%%= yeoman.dist %>/markup',
                    src: [
                        '{,*/}{,*/}*.html'
                    ]
                }]
            }<% } %>
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
                src: ['markup/pages/*.jade'<% if (haveDashboard) { %>,
                    '.tmp/markup/templates/*.jade',
                    '!.tmp/markup/templates/base.jade',
                    '.tmp/markup/components/*-*.jade',
                    '!.tmp/markup/components/all-components.jade',
                    '.tmp/markup/elements/*-*.jade',
                    '!.tmp/markup/elements/all-elements.jade'<% } %>],
                ext: '.html'
            },<% if (haveDashboard) { %>
            serverDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeoman.server %>/dashboard/index.html': ['<%%= yeoman.dev %>/dashboard/markup/index.jade']
                }
            }<% } %>,
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
                src: ['markup/pages/*.jade'<% if (haveDashboard) { %>,
                    '.tmp/markup/templates/*.jade',
                    '!.tmp/markup/templates/base.jade',
                    '.tmp/markup/components/*-*.jade',
                    '!.tmp/markup/components/all-components.jade',
                    '!.tmp/markup/components/head.jade',
                    '.tmp/markup/elements/*-*.jade',
                    '!.tmp/markup/elements/all-elements.jade'<% } %>],
                ext: '.html'
            }<% if (haveDashboard) { %>,
            distDashboard: {
                options: {
                    pretty: true,
                    client: false,
                    data: '<%%= dashboardData %>'
                },
                files: {
                    '<%%= yeoman.dist %>/dashboard/index.html': ['<%%= yeoman.dev %>/dashboard/markup/index.jade']
                }
            }<% } %>
        }<% if (jshint) { %>,
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            test: [
                'Gruntfile.js',
                '<%%= yeoman.dev %>/scripts/{,*/}{,*/}*.js',<% if (haveDashboard) { %>
                '<%%= yeoman.dev %>/dashboard/scripts/{,*/}{,*/}*.js',<% } %>
                '!<%%= yeoman.dev %>/scripts/vendor/{,*/}*'
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
                    '<%%= yeoman.dist %>/../' : ['<%%= yeoman.dist %>/markup/{,*/}{,*/}*.html', '<%%= yeoman.dist %>/*.html']
                }
            },
            requireDistTwo: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: 'require.js',
                            replacement: 'require.min.js'
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/../' : ['<%%= yeoman.dist %>/markup/{,*/}{,*/}*.html', '<%%= yeoman.dist %>/*.html']
                }
            },
            requireDistThree: {
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: 'modernizr.js',
                            replacement: 'modernizr.min.js'
                        }
                    ]
                },
                files: {
                    '<%%= yeoman.dist %>/../' : ['<%%= yeoman.dist %>/markup/{,*/}{,*/}*.html', '<%%= yeoman.dist %>/*.html']
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
            },<% if (haveDashboard) { %>
            serverDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.server %>/dashboard/styles',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.server %>/dashboard/styles'
                }]
            },<% } %>
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>/styles',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.dist %>/styles'
                }]
            }<% if (haveDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dist %>/dashboard/styles',
                    src: '{,*/}*.css',
                    dest: '<%%= yeoman.dist %>/dashboard/styles'
                }]
            }<% } %>
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
        },<% if (useFTP) { %>
        ftpush: {
            build: {
                simple: true,
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
        },<% } %>
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: function (path) {
                        return path.replace('.js', '.js.map');
                    },
                    sourceMapPrefix: 3,
                    sourceMappingURL: function (path) {
                        var pathArray = path.split('/'),
                        pathLength = pathArray.length;
                        return pathArray[(pathLength - 1)].replace('.js', '.js.map');
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dist %>/bower_components/',
                dest: '<%%= yeoman.dist %>/bower_components/',
                src: [
                    'requirejs/require.js',
                    'modernizr/modernizr.js'
                ],
                ext: '.min.js'
            },
            distJS: {
                options: {
                    mangle: true,
                    preserveComments: 'some',
                    sourceMap: function (path) {
                        return path.replace('.js', '.js.map');
                    },
                    sourceMapPrefix: 3,
                    sourceMappingURL: function (path) {
                        var pathArray = path.split('/'),
                        pathLength = pathArray.length;
                        return pathArray[(pathLength - 1)].replace('.js', '.js.map');
                    }
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/scripts/',
                dest: '<%%= yeoman.dist %>/scripts/',
                src: ['{,*/}{,*/}*.js', '!*.js'],
                ext: '.min.js'
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }<% if (haveDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeoman.dist %>/dashboard/images'
                }]
            }<% } %>
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }<% if (haveDashboard) { %>,
            distDashboard: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.dev %>/dashboard/images',
                    src: '{,*/}{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/dashboard/images'
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
                    cwd: '<%%= yeoman.dist %>',
                    src: ['*.html', 'markup/{,*/}{,*/}*.html'<% if (haveDashboard) { %>, 'dashboard/markup/{,*/}{,*/}*.html'<% } %>],
                    dest: '<%%= yeoman.dist %>'
                }]
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
                src: ['styles/*.scss'<% if (haveDashboard) { %>, 'dashboard/styles/*.scss'<% } %>],
                ext: '.css'
            },<% if (haveDashboard) { %>
            serverDashboard: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['dashboard/styles/*.scss'],
                ext: '.css'
            },<% } %>
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
            }<% if (haveDashboard) { %>,
            distDashboard: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['dashboard/styles/*.scss'],
                ext: '.css'
            },<% } %>
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
            },<% if (haveDashboard) { %>
            serverDashboard: {
                options: {
                    dumpLineNumbers: 'comments'
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.server %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            },<% } %>
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
            }<% if (haveDashboard) { %>,
            distDashboard: {
                options: {
                    dumpLineNumbers: 'comments'
                },
                expand: true,
                cwd: '<%%= yeoman.dev %>/',
                dest: '<%%= yeoman.dist %>/',
                src: ['dashboard/styles/*.less'],
                ext: '.css'
            },<% } %>
        }<% } %>
    });<% if (useFTP) { %>

    grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function () {
        var ftpJSON = grunt.file.readJSON('.ftppass');
        if (ftpJSON.host === '') {
            grunt.log.error('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
        }
        else {
            grunt.config.set('secret', ftpJSON);
            grunt.task.run(['ftpush']);
        }
    });<% } %>
    <% if (haveDashboard) { %>
    grunt.registerTask('build-dashboard', 'Builds out a static HTML page that lists all created pages', function () {
        var done = this.async(),
        itemsArray = [],
        dashData = {},
        pageData,
        templateData,
        componentData,
        elementData;
        var updatePath = function (path, strToRemove) {
            return path.replace(strToRemove, '..');
        };
        var toTitleCase = function (str)
        {
            return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        };
        var convertDashes = function (str)
        {
            return str.replace('-', ' ');
        };
        var findJadeNames = function (path, type, strToRemove) {
            var titleArray = path.split('/'),
            title = titleArray[(titleArray.length - 1)],
            newPath;
            if (type === 'element' || type === 'component') {
                newPath = updatePath(path.replace('.jade', '-' + type + '.html'), strToRemove);
            }
            else {
                newPath = updatePath(path.replace('jade', 'html'), strToRemove);
            }
            if (title !== 'base.jade' && title !== 'all-components.jade' && title !== 'all-elements.jade' && title !== 'head.jade') {
                itemsArray.push({path: newPath, title: toTitleCase(convertDashes(title.replace('.jade', '')))});
            }
            return itemsArray;
        };
        var generateMarkup = function (path, type) {
            var file = grunt.file.read(path),
            regex = /!##([^;]*)##!/,
            fileMarkupMatch = file.match(regex);
            if (fileMarkupMatch && type !== 'template') {
                var markup = fileMarkupMatch[1];
                grunt.file.write(path.replace('.jade', '-' + type + '.jade'), 'extend ../templates/base\nblock template\n' + markup);
            }
            else if (fileMarkupMatch && type === 'template') {
                var blockArray = fileMarkupMatch[1].trim().replace(/ /g, '').split('\n');
                blockArray.forEach(function (element) {
                    var pattern = new RegExp('block ' + element + '\\s'),
                    fpoReplacement = '.fpo-image-container <div class="fpo-background"><span class="fpo-name">block ' + element.trim() + '</span></div>\n';
                    grunt.file.write(path, file.replace(pattern, fpoReplacement));
                });
            }
        };
        // Go through jade pages
        grunt.file.recurse('dev/markup/pages', function (abspath) {
            pageData = findJadeNames(abspath, 'page', 'dev');
        });
        itemsArray = []; // reset items array
        // Go through jade templates
        grunt.file.recurse('dev/.tmp/markup/templates', function (abspath) {
            templateData = findJadeNames(abspath, 'template', 'dev/.tmp');
            generateMarkup(abspath, 'template');
        });
        itemsArray = []; // reset items array
        // Go through jade components
        grunt.file.recurse('dev/.tmp/markup/components', function (abspath) {
            componentData = findJadeNames(abspath, 'component', 'dev/.tmp');
            generateMarkup(abspath, 'component');
        });
        itemsArray = []; // reset items array
        // Go through jade elements
        grunt.file.recurse('dev/.tmp/markup/elements', function (abspath) {
            elementData = findJadeNames(abspath, 'element', 'dev/.tmp');
            generateMarkup(abspath, 'element');
        });
        dashData = {
            pages: pageData,
            templates: templateData,
            components: componentData,
            elements: elementData
        };
        // console.log(dashData);
        grunt.config(['dashboardData'], dashData);
        done();
    });<% } %>

    grunt.registerTask('server', 'Open a developement server within your browser', [
        'clean:server',
        'copy:server',<% if (haveDashboard) { %>
        'build-dashboard'<% } %><% if (jshint) { %>,
        'jshint:test'<% } %>,
        'jade:server',<% if (haveDashboard) { %>
        'jade:serverDashboard',
        'copy:serverDashboard',<% } %><% if (cssOption === 'LESS') { %>
        'less:server',<% if (haveDashboard) { %>
        'less:serverDashboard',<% } %>
        'string-replace:lessMapFixServer',
        'string-replace:lessMainFixServer',<% } %><% if (cssOption === 'SASS') { %>
        'sass:server',<% if (haveDashboard) { %>
        'sass:serverDashboard',<% } %>
        'string-replace:sassMapFixServer',<% } %>
        'autoprefixer:server',
        'autoprefixer:serverDashboard',
        'clean:temp',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',<% if (haveDashboard) { %>
        'build-dashboard',<% } %><% if (jshint) { %>
        'jshint:test',<% } %>
        'imagemin',
        'svgmin',
        'jade:dist',<% if (haveDashboard) { %>
        'jade:distDashboard',
        'copy:distDashboard',<% } %><% if (cssOption === 'LESS') { %>
        'less:dist',<% if (haveDashboard) { %>
        'less:distDashboard',<% } %>
        'string-replace:lessMapFixDist',
        'string-replace:lessMainFixDist',<% } %><% if (cssOption === 'SASS') { %>
        'sass:dist',<% if (haveDashboard) { %>
        'sass:distDashboard',<% } %>
        'string-replace:sassMapFixDist',<% } %>
        'autoprefixer:dist',<% if (haveDashboard) { %>
        'autoprefixer:distDashboard',<% } %>
        'requirejs',
        'string-replace:requireDist', // change require main path to 'main.min'
        'string-replace:requireDistTwo',
        'string-replace:requireDistThree',
        'htmlmin:dist',
        'uglify',
        'clean:temp'
    ]);<% if (jshint) { %>

    grunt.registerTask('test', 'Peform tests on JavaScript', [
        'jshint:test'
    ]);<% } %>

    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress'
    ]);<% if (useFTP) { %>

    grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
        'zip',
        'ftpinfo',
    ]);<% } %>

};