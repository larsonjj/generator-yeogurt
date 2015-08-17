'use strict';

import fs from 'fs';
import path from 'path';
import foldero from 'foldero';
import jade from 'jade';

export default function(gulp, plugins, args, config, taskTarget) {
  var dirs = config.directories;
  let dest = path.join(taskTarget);
  let dataPath = path.join(dirs.source, dirs.data);
  var siteData = {};
  if (fs.existsSync(dataPath)) {
    // Convert directory to JS Object
    siteData = foldero(dataPath, {
      recurse: true
    });
  }

  // Jade template compile
  gulp.task('jade', () => {
    return gulp.src([
      path.join(dirs.source, '**/*.jade'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(plugins.jade({
      jade: jade,
      pretty: true,
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
