'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';
import gulp from 'gulp';
import fancyLog from 'fancy-log';
import { plugins, args, config, taskTarget, browserSync } from '../utils';

let dirs = config.directories;
let entries = config.entries;
let dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));

// Sass compilation
gulp.task('sass', () => {
  return gulp
    .src(entries.css, { cwd: path.join(dirs.source, dirs.styles) })
    .pipe(plugins.plumber())
    .pipe(gulpif(!args.production, plugins.sourcemaps.init({ loadMaps: true })))
    .pipe(
      plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [
          path.join(dirs.source, dirs.styles),
          path.join(dirs.source, dirs.modules)
        ]
      })
    )
    .on('error', function(err) {
      fancyLog(err);
    })
    .pipe(plugins.postcss([autoprefixer()]))
    .pipe(
      plugins.rename(function(path) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
      })
    )
    .pipe(gulpif(args.production, plugins.cssnano({ rebase: false })))
    .pipe(gulpif(!args.production, plugins.sourcemaps.write('./')))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});
