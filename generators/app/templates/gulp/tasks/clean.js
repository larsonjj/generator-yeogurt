'use strict';

import del from 'del';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Clean
  gulp.task('clean', () =>
    del([dirs.temporary, dirs.destination])
  );
}
