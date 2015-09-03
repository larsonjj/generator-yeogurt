'use strict';

import fs from 'fs';
import path from 'path';
import foldero from 'foldero';
import nunjucks from 'gulp-nunjucks-html';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.join(taskTarget);
  let dataPath = path.join(dirs.source, dirs.data);

  // Nunjucks template compile
  gulp.task('nunjucks', () => {
    var siteData = {};
    if (fs.existsSync(dataPath)) {
      // Convert directory to JS Object
      siteData = foldero(dataPath, {
        recurse: true,
        whitelist: '(.*/)*.+\.(json)$',
        loader: function loadAsString(file) {
          let json = {};
          try {
            json = JSON.parse(fs.readFileSync(file, 'utf8'));
          }
          catch(e) {
            console.log('Error Parsing JSON file: ' + file);
            console.log('==== Details Below ====');
            console.log(e);
          }
          return json;
        }
      });
    }

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
    .pipe(nunjucks({
      searchPaths: [path.join(dirs.source)],
      ext: '.html'
    }).on('error', function(err) {
      plugins.util.log(err);
    }))
    .pipe(plugins.htmlmin({
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }))
    .pipe(gulp.dest(dest))
    .on('end', browserSync.reload);
  });
}
