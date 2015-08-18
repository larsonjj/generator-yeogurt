'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer-core';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  let dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));

  // Sass compilation
  gulp.task('sass', () => {
    gulp.src(path.join(dirs.source, dirs.styles, entries.css))
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [
          path.join(dirs.source, dirs.styles),
          path.join(dirs.source, dirs.modules)
        ]
      }).on('error', plugins.sass.logError))
      .pipe(plugins.postcss([autoprefixer({browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']})]))
      .pipe(plugins.rename(function(path) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });
}
