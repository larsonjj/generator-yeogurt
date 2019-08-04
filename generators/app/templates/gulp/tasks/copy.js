'use strict';

import { gulp, plugins, taskTarget, dirs, join } from '../shared-vars';

let dest = join(taskTarget);

// Copy
gulp.task('copy', () => {
  return gulp.src([
    join(dirs.source, '**/*'),
    '!' + join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
    '!' + join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'pug') { %>,
    '!' + join(dirs.source, '**/*.pug')<% } %>
  ])
  .pipe(plugins.changed(dest))
  .pipe(gulp.dest(dest));
});
