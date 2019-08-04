'use strict';

import { gulp, plugins, args, config, taskTarget, browserSync, dirs, join } from '../shared-vars';

import fs from 'fs';
import path from 'path';
import foldero from 'foldero';
import pug from 'pug';
import yaml from 'js-yaml';

let dest = join(taskTarget);
let dataPath = join(dirs.source, dirs.data);

// Pug template compile
gulp.task('pug', () => {
  let siteData = {};
  if (fs.existsSync(dataPath)) {
    // Convert directory to JS Object
    siteData = foldero(dataPath, {
      recurse: true,
      whitelist: '(.*/)*.+.(json|ya?ml)$',
      loader: function loadAsString(file) {
        let json = {};
        try {
          if (path.extname(file).match(/^.ya?ml$/)) {
            json = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
          } else {
            json = JSON.parse(fs.readFileSync(file, 'utf8'));
          }
        } catch (e) {
          console.log('Error Parsing DATA file: ' + file);
          console.log('==== Details Below ====');
          console.log(e);
        }
        return json;
      }
    });
  }

  // Add --debug option to your gulp task to view
  // what data is being loaded into your templates
  if (args.debug) {
    console.log('==== DEBUG: site.data being injected to templates ====');
    console.log(siteData);
    console.log(
      '\n==== DEBUG: package.json config being injected to templates ===='
    );
    console.log(config);
  }

  return gulp
    .src([
      join(dirs.source, '**/*.pug'),
      '!' + join(dirs.source, '{**/_*,**/_*/**}')
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(
      plugins.pug({
        pug: pug,
        pretty: true,
        locals: {
          config: config,
          debug: true,
          site: {
            data: siteData
          }
        }
      })
    )
    .pipe(
      plugins.htmlmin({
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        removeCommentsFromCDATA: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true
      })
    )
    .pipe(gulp.dest(dest))
    .on('end', browserSync.reload);
});
