'use strict';

import fs from 'fs';
import path from 'path';
import foldero from 'foldero';

export default function(gulp, plugins, args, config, taskTarget) {
  var dirs = config.directories;
  let dest = path.join(taskTarget);
  let dataPath = path.join(dirs.source, dirs.data);
  var siteData = {};
  if (fs.existsSync(dataPath)) {
    // Convert directory to JS Object
    siteData = foldero(dataPath, {
      relative: path.join('../'),
      recurse: true
    });
  }

  // Configure lookup path for nunjucks templates
  plugins.nunjucksRender.nunjucks.configure([path.join(dirs.source)], {watch: false});

  // Nunjucks template compile
  gulp.task('nunjucks', () => {
    return gulp.src([
      path.join(dirs.source, '**/*.nunjucks'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(plugins.data({
      data: {
        config: config,
        debug: true,
        site: {
          data: siteData
        }
      }
    }))
    .pipe(plugins.nunjucksRender())
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
