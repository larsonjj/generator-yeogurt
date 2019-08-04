'use strict';

import { gulp, plugins, args, config, taskTarget, browserSync, dirs, entries, join } from '../shared-vars';

import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';

let dest = join(taskTarget, dirs.styles.replace(/^_/, ''));

// Sass compilation
gulp.task('sass', () => {
  return gulp
    .src(join(dirs.source, dirs.styles, entries.css))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(
      plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [
          join(dirs.source, dirs.styles),
          join(dirs.source, dirs.modules)
        ]
      })
    )
    .on('error', function(err) {
      plugins.util.log(err);
    })
    .on('error', plugins.notify.onError(config.defaultNotification))
    .pipe(plugins.postcss([autoprefixer()]))
    .pipe(
      plugins.rename(function(path) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
      })
    )
    .pipe(gulpif(args.production, plugins.cssnano({ rebase: false })))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});
