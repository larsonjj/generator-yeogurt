'use strict';

import { gulp, dirs, join } from '../shared-vars';

import del from 'del';

// Clean
gulp.task('clean', () =>
  del([join(dirs.temporary), join(dirs.destination)])
);
