// Imagemin task
// Compresses images

var path = require('path');
var autoprefixer = require('autoprefixer-core');

var sassTask = function sassTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;
  var source = path.join(rootPath, dirs.source, dirs.styles, '/main.{scss,sass}');

  // Serve
  gulp.task('sass:serve', function () {
    var dest = path.join(rootPath, dirs.temporary, dirs.styles.replace(/^_/, ''));
    gulp.src(source)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [path.join(rootPath, dirs.source, dirs.styles) ]
      }).on('error', plugins.sass.logError))
      .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });

  // Build
  gulp.task('sass:build', function () {
    var dest = path.join(rootPath, dirs.destination, dirs.styles.replace(/^_/, ''));
    gulp.src(source)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'compressed',
        precision: 10,
        includePaths: [path.join(rootPath, dirs.source, dirs.styles) ]
      }).on('error', plugins.sass.logError))
      .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(dest));
  });

};

module.exports = sassTask;
