var path = require('path');
var browserify = require('browserify');
var gulp = require('gulp');
var vsource = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulpLoadPlugins = require('gulp-load-plugins');
var pngquant = require('imagemin-pngquant');
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync').create();
var karma = require('karma').server;
var del = require('del');
var config = require('./yeogurt.conf');

var plugins = gulpLoadPlugins();
var dirs = config.directories;

// Cleans build directory and builds production ready site/app
gulp.task('default', ['clean:build'], function() {
  gulp.start('build');
});

// Boot-up development server
gulp.task('serve', ['clean:tmp'], function() {
  gulp.start('serve:tmp');
});

// Development server tasks
gulp.task('serve:tmp', [
  'imagemin:serve',
  'copy:serve'<% if (htmlOption === 'jade') { %>,
  'jade:serve'<% } else if (htmlOption === 'swig') {  %>,
  'swig:serve'<% } %><% if (jsOption === 'browserify') { %>,
  'browserify:serve'<% } %><% if (cssOption === 'less') { %>,
  'less:serve'<% } %><% if (cssOption === 'sass') { %>,
  'sass:serve'<% } %><% if (cssOption === 'stylus') { %>,
  'stylus:serve'<% } %><% if (useDashboard) { %>,
  'dashboard:serve'<% } %>
], function() {
  browserSync.init({
    startPath: config.baseUrl,
    server: {
      baseDir: dirs.temporary,
      routes: (function() {
        var routes = {};

        // Map base URL to routes
        routes[config.baseUrl] = dirs.temporary;

        return routes;
      })()
    }
  });<% if (cssOption === 'sass') { %>

  // Styles
  gulp.watch([
    path.join(__dirname, dirs.source, dirs.styles, '**/*.{scss,sass}')
  ], ['sass:serve']);<% } else if (cssOption === 'less') { %>
  gulp.watch([
    path.join(__dirname, dirs.source, dirs.styles, '**/*.less')
  ], ['less:serve']);<% } else if (cssOption === 'stylus') { %>
  gulp.watch([
    path.join(__dirname, dirs.source, dirs.styles, '**/*.styl')
  ], ['stylus:serve']);
  <% } %><% if (htmlOption === 'jade') { %>

  // Jade Templates
  gulp.watch([
    path.join(__dirname, dirs.source, '**/*.jade')
  ], ['jade:serve']);<% } else if (htmlOption === 'swig') { %>

  // Swig Templates
  gulp.watch([
    path.join(__dirname, dirs.source, '**/*.swig')
  ], ['swig:serve']);
  <% } %>

  // Copy
  gulp.watch([
    path.join(__dirname, dirs.source, '**/*'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')<% if (htmlOption === 'swig') { %>,
    path.join('!', __dirname, dirs.source, '**/*.swig')<% } else if (htmlOption === 'jade') { %>,
    path.join('!', __dirname, dirs.source, '**/*.jade')<% } %>
  ], ['copy:serve']);

  // Scripts
  gulp.watch([
    path.join(__dirname, dirs.source, '**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>')
  ], ['browserify:serve']);

  // Images
  gulp.watch([
    path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
  ], ['imagemin:serve']);

  // All other files
  gulp.watch([
    path.join(__dirname, dirs.temporary)
  ]).on('change', browserSync.reload);

});

// Build production-ready code
gulp.task('build', [
  'copy:build',
  'imagemin:build',<% if (htmlOption === 'jade') { %>
  'jade:build',<% } else if (htmlOption === 'swig') {  %>
  'swig:build',<% } %><% if (cssOption === 'less') { %>
  'less:build',<% } else if (cssOption === 'sass') { %>
  'sass:build',<% } else if (cssOption === 'stylus') { %>
  'stylus:build',<% } %>
  'browserify:build'<% if (useDashboard) { %>,
  'dashboard:build'<% } %>
], function() {
  gulp.start('clean:tmp'); // Cleanup any tmp files
});

// Testing
gulp.task('test', ['lint', 'browserify:test', 'karma:unit', 'clean:tmp']);
gulp.task('test:watch', ['lint', 'browserify:test', 'karma:unitWatch', 'clean:tmp']);
gulp.task('test:e2e', ['lint', 'browserSync:serve', 'protractor', 'clean:tmp']);

gulp.task('protractor', function() {
  gulp.src(path.join(__dirname, dirs.temporary, 'tests.js'))
    .pipe(plugins.protractor({
        configFile: path.join(__dirname, 'protractor.config.js'),
        args: ['--baseUrl', 'http://127.0.0.1:9009']
    }))
    .on('error', function(e) {
      throw e;
    });
});

gulp.task('karma:unit', function(done) {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true,
    autoWatch: false
  }, done);
});

gulp.task('karma:unitWatch', function(done) {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: false,
    autoWatch: true
  }, done);
});

// Eslint scripts
gulp.task('lint', function() {
  gulp.src([
    path.join(__dirname, 'gulpfile.js'),
    path.join(__dirname, dirs.source, '**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>'),
    // Ignore all vendor folder files
    path.join('!', __dirname, '**/vendor/**', '*')
  ])
  .pipe(plugins.reload({stream: true, once: true}))
  .pipe(plugins.eslint({
    useEslintrc: true
  }))
  .pipe(plugins.eslint.format())
  .pipe(plugins.if(!browserSync.active, plugins.eslint.failAfterError()));
});

// Clean output directory
gulp.task('clean:tmp', del.bind(null, [path.join(__dirname, dirs.temporary)]));
gulp.task('clean:build', del.bind(null, [path.join(__dirname, dirs.temporary)]));

gulp.task('imagemin:serve', function() {
  var source = path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}');
  var dest = path.join(__dirname, dirs.source, dirs.images.replace(/^_/, ''));
  return gulp.src(source)
    .pipe(plugins.changed(dest))
    .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({quality: '65-80', speed: 10})]
    }))
    .pipe(gulp.dest(dest));
});

gulp.task('imagemin:build', function() {
  var source = path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}');
  var dest = path.join(__dirname, dirs.source, dirs.images.replace(/^_/, ''));
  return gulp.src(source)
    .pipe(plugins.changed(dest))
    .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({quality: '65-80', speed: 4})]
    }))
    .pipe(gulp.dest(dest));
});

gulp.task('copy:serve', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')<% if (htmlOption === 'swig') { %>,
    path.join('!', __dirname, dirs.source, '**/*.swig')<% } else if (htmlOption === 'jade') { %>,
    path.join('!', __dirname, dirs.source, '**/*.jade')<% } %>
  ];
  var dest = path.join(__dirname, dirs.temporary);
  return gulp.src(source)
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
});

gulp.task('copy:build', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')<% if (htmlOption === 'swig') { %>,
    path.join('!', __dirname, dirs.source, '**/*.swig')<% } else if (htmlOption === 'jade') { %>,
    path.join('!', __dirname, dirs.source, '**/*.jade')<% } %>
  ];
  var dest = path.join(__dirname, dirs.destination);
  return gulp.src(source)
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
});
<% if (htmlOption === 'swig') { %>
gulp.task('swig:serve', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*.swig'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')
  ];
  var dest = path.join(__dirname, dirs.temporary);
  return gulp.src(source)
  .pipe(plugins.changed(dest))
  .pipe(plugins.swig({
    data: {
      debug: true
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest))
  .pipe(browserSync.stream());
});

gulp.task('swig:build', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*.swig'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')
  ];
  var dest = path.join(__dirname, dirs.destination);
  return gulp.src(source)
  .pipe(plugins.swig({
    data: {
      debug: false
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest));
});
<% } else if (htmlOption === 'jade') { %>
gulp.task('jade:serve', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*.jade'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')
  ];
  var dest = path.join(__dirname, dirs.temporary);
  return gulp.src(source)
  .pipe(plugins.changed(dest))
  .pipe(plugins.jade({
    locals: {
      debug: true
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest))
  .pipe(browserSync.stream());
});

gulp.task('jade:build', function() {
  var source = [
    path.join(__dirname, dirs.source, '**/*.jade'),
    path.join('!', __dirname, dirs.source, '**/\_*/**')
  ];
  var dest = path.join(__dirname, dirs.destination);
  return gulp.src(source)
  .pipe(plugins.jade({
    locals: {
      debug: false
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest));
});<% } %>

// set up the browserify instance
var browserifyOptions = browserify(
  path.join(__dirname, dirs.source, dirs.scripts, '/main.js'), {
  debug: true,
  transform: [
    require('envify'),
    require('babelify')<% if (jsFramework === 'angular') { %>,
    require('browserify-ngannotate'),
    require('browserify-ng-html2js')({
      module: '<%= _.camelize(projectName) %>',
      extension: 'html'
    })<% } else if (jsFramework === 'marionette') { %>,
    require('jstify')<% } %>
  ]
});

gulp.task('browserify:serve', function() {
  var dest = path.join(__dirname, dirs.temporary, dirs.scripts.replace(/^_/, ''));

  return browserifyOptions.bundle()
    .pipe(vsource('main.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

gulp.task('browserify:build', function() {
  var dest = path.join(__dirname, dirs.destination, dirs.scripts.replace(/^_/, ''));

  return browserifyOptions.bundle()
    .pipe(vsource('main.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(plugins.uglify())
        .on('error', plugins.util.log)
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest));
});

gulp.task('browserify:test', function() {
  var dest = path.join(__dirname, dirs.temporary, dirs.scripts.replace(/^_/, ''));

  return browserifyOptions.bundle()
    .pipe(vsource('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dest));
});

<% if (cssOption === 'less') { %>
gulp.task('less:serve', function() {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.less');
  var dest = path.join(__dirname, dirs.temporary, dirs.styles.replace(/^_/, ''));
  return gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, dirs.source, dirs.styles)]
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

gulp.task('less:build', function() {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.less');
  var dest = path.join(__dirname, dirs.destination, dirs.styles.replace(/^_/, ''));
  return gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, dirs.source, dirs.styles)]
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
});<% } else if (cssOption === 'sass') { %>
gulp.task('sass:serve', function () {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.{scss,sass}');
  var dest = path.join(__dirname, dirs.temporary, dirs.styles.replace(/^_/, ''));
  gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [path.join(__dirname, dirs.source, dirs.styles) ]
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

gulp.task('sass:build', function () {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.{scss,sass}');
  var dest = path.join(__dirname, dirs.destination, dirs.styles.replace(/^_/, ''));
  gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'compressed',
      precision: 10,
      includePaths: [path.join(__dirname, dirs.source, dirs.styles) ]
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
});<% } else if (cssOption === 'stylus') { %>
gulp.task('stylus:serve', function () {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.styl');
  var dest = path.join(__dirname, dirs.temporary, dirs.styles.replace(/^_/, ''));
  gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: false
    })
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

gulp.task('stylus:build', function () {
  var source = path.join(__dirname, dirs.source, dirs.styles, '/main.styl');
  var dest = path.join(__dirname, dirs.temporary, dirs.styles.replace(/^_/, ''));
  gulp.src(source)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: true
    })
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
});<% } %>
