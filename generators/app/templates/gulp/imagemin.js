'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  // Imagemin
  gulp.task('imagemin', () => {
    return gulp.src(path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}'))
      .pipe(plugins.changed(dest))
      .pipe(gulpif(args.production, plugins.imagemin([
        plugins.imagemin.jpegtran({progressive: true}),
        plugins.imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], { use: [pngquant({speed: 10})] })))
      .pipe(gulp.dest(dest));
  });
}
