/*eslint no-process-exit:0 */

'use strict';

import { gulp, plugins, browserSync, dirs, join } from '../shared-vars';

import gulpif from 'gulp-if';

// ESLint
gulp.task('eslint', () => {
  return gulp
    .src([
      join('gulpfile.babel.js'),
      join(dirs.source, '**/*.js'),
      // Ignore all vendor folder files
      '!' + join('**/vendor/**', '*')
    ])
    .pipe(browserSync.reload({ stream: true, once: true }))
    .pipe(
      plugins.eslint({
        useEslintrc: true
      })
    )
    .pipe(plugins.eslint.format())
    .pipe(gulpif(!browserSync.active, plugins.eslint.failAfterError()))
    .on('error', function() {
      if (!browserSync.active) {
        process.exit(1);
      }
    });
});
