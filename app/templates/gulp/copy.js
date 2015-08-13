'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.join(__dirname, taskTarget);

  // Copy
  gulp.task('copy', () => {
    return gulp.src([
        path.join(__dirname, dirs.source, '**/*'),
        '!' + path.join(__dirname, dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
        '!' + path.join(__dirname, dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
        '!' + path.join(__dirname, dirs.source, '**/*.jade')<% } %>
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
