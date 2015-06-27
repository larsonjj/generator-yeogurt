// Imagemin task
// Compresses images

var path = require('path');
var pngquant = require('imagemin-pngquant');

var imageminTask = function imageminTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var source = path.join(rootPath, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}');

  // Serve
  gulp.task('imagemin:serve', function() {
    var dest = path.join(rootPath, dirs.temporary, dirs.images.replace(/^_/, ''));
    return gulp.src(source)
      .pipe(plugins.changed(dest))
      .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({speed: 10})]
      }))
      .pipe(gulp.dest(dest));
  });

  // Build
  gulp.task('imagemin:build', function() {
    var dest = path.join(rootPath, dirs.destination, dirs.images.replace(/^_/, ''));
    return gulp.src(source)
      .pipe(plugins.changed(dest))
      .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({quality: '65-80', speed: 4})]
      }))
      .pipe(gulp.dest(dest));
  });

};

module.exports = imageminTask;
