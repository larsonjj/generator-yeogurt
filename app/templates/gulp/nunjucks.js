'use strict';

import path from 'path';
import foldero from 'foldero';

export default function(gulp, plugins, args, config, taskTarget) {
  var dirs = config.directories;
  let dest = path.join(__dirname, taskTarget);
  // Convert directory to JS Object
  var siteData = foldero(path.join(dirs.source, dirs.data), {
    relative: path.join(__dirname, '../'),
    recurse: true
  });
  // Configure lookup path for nunjucks templates
  plugins.nunjucksRender.nunjucks.configure([path.join(__dirname, dirs.source)], {watch: false});

  // Nunjucks template compile
  gulp.task('nunjucks', () => {
    return gulp.src([
      path.join(__dirname, dirs.source, '**/*.nunjucks'),
      '!' + path.join(__dirname, dirs.source, '{**/\_*,**/\_*/**}')
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
