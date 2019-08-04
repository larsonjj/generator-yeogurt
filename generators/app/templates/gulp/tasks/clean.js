'use strict';

import { gulp, config, dirs } from '../shared-vars';

import path from 'path';
import del from 'del';

// Clean
gulp.task('clean', () =>
  del([path.join(dirs.temporary), path.join(dirs.destination)])
);
