'use strict';

import { gulp, plugins, args, taskTarget, dirs, join } from '../shared-vars';

import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';

let dest = join(taskTarget, dirs.images.replace(/^_/, ''));

// Imagemin
gulp.task('imagemin', () => {
  return gulp
    .src(join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}'))
    .pipe(plugins.changed(dest))
    .pipe(
      gulpif(
        args.production,
        plugins.imagemin(
          [
            plugins.imagemin.jpegtran({ progressive: true }),
            plugins.imagemin.svgo({ plugins: [{ removeViewBox: false }] })
          ],
          { use: [pngquant({ speed: 10 })] }
        )
      )
    )
    .pipe(gulp.dest(dest));
});
