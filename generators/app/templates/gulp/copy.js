'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget);

  // Copy
  gulp.task('copy', () => {
    return gulp.src([
      path.join(dirs.source, '**/*'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
      '!' + path.join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'pug') { %>,
      '!' + path.join(dirs.source, '**/*.pug')<% } %>
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
  });
}
