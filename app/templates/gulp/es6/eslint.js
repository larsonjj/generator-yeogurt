/*eslint no-process-exit:0 */

'use strict';

import path from 'path';
import gulpif from 'gulp-if';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // ESLint
  gulp.task('eslint', () => {
    gulp.src([
      path.join('gulpfile.js'),
      path.join(dirs.source, '**/*.js'),
      // Ignore all vendor folder files
      '!' + path.join('**/vendor/**', '*')
    ])
    .pipe(browserSync.reload({stream: true, once: true}))
    .pipe(plugins.eslint({
      useEslintrc: true
    }))
    .pipe(plugins.eslint.format())
    .pipe(gulpif(!browserSync.active, plugins.eslint.failAfterError()))
    .on('error', function() {
      if (!browserSync.active) {
        process.exit(1);
      }
    });
  });
}
