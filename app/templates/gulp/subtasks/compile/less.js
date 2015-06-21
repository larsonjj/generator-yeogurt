// Imagemin task
// Compresses images

var path = require('path');
var autoprefixer = require('autoprefixer-core');

var lessTask = function lessTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;
  var source = path.join(rootPath, dirs.source, dirs.styles, '/main.less');

  // Serve
  gulp.task('less:serve', function() {
    var dest = path.join(rootPath, dirs.temporary, dirs.styles.replace(/^_/, ''));
    return gulp.src(source)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.less({
        paths: [path.join(rootPath, dirs.source, dirs.styles)]
      }))
      .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });

  // Build
  gulp.task('less:build', function() {
    var dest = path.join(rootPath, dirs.destination, dirs.styles.replace(/^_/, ''));
    return gulp.src(source)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.less({
        paths: [path.join(rootPath, dirs.source, dirs.styles)]
      }))
      .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(dest));
  });

};

module.exports = lessTask;
