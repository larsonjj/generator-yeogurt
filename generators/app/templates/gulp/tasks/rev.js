'use strict';

import path from 'path';
import gulpFilter from 'gulp-filter';
import gulpRev from 'gulp-rev';
import gulpRevDel from 'gulp-rev-delete-original';
import gulpRevRewrite from 'gulp-rev-rewrite';
import gulp from 'gulp';
import { plugins, args, config, taskTarget, browserSync } from '../utils';

let dirs = config.directories;
let dest = path.join(taskTarget);

// Copy
gulp.task('rev', () => {
  // gulp-rev-rewrite will mangle binary files (images, etc), so ignore them
  const binaryAssetFilter = gulpFilter(
    ['**', '!**/*.{ico,png,jpg,jpeg,gif,webp}'],
    { restore: true }
  );
  const htmlFilter = gulpFilter(['**', '!**/*.html'], { restore: true });
  return gulp
    .src(`**/*.{js,css,html}`, { cwd: dirs.destination })
    .pipe(htmlFilter)
    .pipe(gulpRev())
    .pipe(htmlFilter.restore)
    .pipe(binaryAssetFilter)
    .pipe(gulpRevRewrite())
    .pipe(binaryAssetFilter.restore)
    .pipe(gulp.dest(dest))
    .pipe(gulpRevDel())
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest(dest));
});
