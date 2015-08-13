'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

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
    .pipe(plugins.if(!browserSync.active, plugins.eslint.failAfterError()));
  });
}
