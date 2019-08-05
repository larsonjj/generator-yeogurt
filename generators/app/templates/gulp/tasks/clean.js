'use strict';

import gulp from 'gulp';
import { plugins, args, config, taskTarget, browserSync } from '../utils';
import del from 'del';

let dirs = config.directories;

// Clean
gulp.task('clean', () => del([dirs.temporary, dirs.destination]));
