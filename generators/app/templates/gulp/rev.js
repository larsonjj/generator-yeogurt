'use strict';

import path from 'path';
import gulpFilter from 'gulp-filter';
import gulpRev from 'gulp-rev';
import gulpRevDel from 'gulp-rev-delete-original';
import gulpRevRewrite from 'gulp-rev-rewrite';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget);

  // Copy
  gulp.task('rev', () => {
    const assetFilter = gulpFilter(['**', '!**/*.html'], { restore: true });
    return gulp
      .src([`${dirs.destination}/**/*`, `!${dirs.destination}/**/*.{txt,md}`])
      .pipe(assetFilter)
      .pipe(gulpRev())
      .pipe(gulpRevDel())
      .pipe(assetFilter.restore)
      .pipe(gulpRevRewrite())
      .pipe(gulp.dest(dest))
      .pipe(gulpRev.manifest())
      .pipe(gulp.dest(dest));
  });
}
