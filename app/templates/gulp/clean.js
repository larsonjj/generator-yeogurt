'use strict';

import path from 'path';
import del from 'del';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Clean
  gulp.task('clean', del.bind(null, [
    path.join(__dirname, dirs.temporary),
    path.join(__dirname, dirs.destination)
  ]));
}
