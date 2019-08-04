'use strict';

import path from 'path';
import del from 'del';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Clean
  gulp.task('clean', () =>
    del([path.join(dirs.temporary), path.join(dirs.destination)])
  );
}
