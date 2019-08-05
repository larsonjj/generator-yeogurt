'use strict';

import path from 'path';
import gulp from 'gulp';
import { plugins, args, config, taskTarget, browserSync } from '../utils';

let dirs = config.directories;
let dest = path.join(taskTarget);

// Copy
gulp.task('copy', () => {
  return gulp.src([
    '**/*',
    '!{**/\_*,**/\_*/**,*.md}'<% if (htmlOption === 'nunjucks') { %>,
    '!**/*.nunjucks'<% } else if (htmlOption === 'pug') { %>,
    '!**/*.pug'<% } %>
  ], { cwd: dirs.source })
  .pipe(plugins.changed(dest))
  .pipe(gulp.dest(dest));
});
