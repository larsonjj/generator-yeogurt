'use strict';

import path from 'path';
import foldero from 'foldero';
import jade from 'jade';

export default function(gulp, plugins, args, config, taskTarget) {
  var dirs = config.directories;
  let dest = path.join(__dirname, taskTarget);
  // Convert directory to JS Object
  var siteData = foldero(path.join(dirs.source, dirs.data), {
    relative: path.join(__dirname, '../'),
    recurse: true
  });

  // Jade template compile
  gulp.task('jade', () => {
    return gulp.src([
      path.join(__dirname, dirs.source, '**/*.jade'),
      '!' + path.join(__dirname, dirs.source, '{**/\_*,**/\_*/**}')
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(plugins.jade({
      jade: jade,
      locals: {
        config: config,
        debug: true,
        site: {
          data: siteData
        }
      }
    }))
    .pipe(plugins.htmlmin({
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }))
    .pipe(gulp.dest(dest));
  });
}
