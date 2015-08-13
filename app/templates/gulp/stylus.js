'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer-core';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  let dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));

  // Stylus compilation
  gulp.task('stylus', () => {
    gulp.src(path.join(dirs.source, dirs.styles, entries.css))
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.stylus({
        compress: true,
        'include css': true
      }))
      .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });
}
