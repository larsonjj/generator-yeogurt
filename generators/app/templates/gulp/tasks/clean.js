'use strict';

import { gulp, dirs, join } from '../shared-vars';

import del from 'del';

// Clean
gulp.task('clean', () => {
  return del([join(dirs.temporary), join(dirs.destination)])
});
