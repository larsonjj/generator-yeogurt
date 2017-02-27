'use strict';

var path = require('path');
var gulpif = require('gulp-if');
var pngquant = require('imagemin-pngquant');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  // Imagemin
  gulp.task('imagemin', function() {
    return gulp.src(path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}'))
      .pipe(plugins.changed(dest))
      .pipe(gulpif(args.production, plugins.imagemin([
        plugins.imagemin.jpegtran({progressive: true}),
        plugins.imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], { use: [pngquant({speed: 10})] })))
      .pipe(gulp.dest(dest));
  });
};
