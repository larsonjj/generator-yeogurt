'use strict';

import path from 'path';
import glob from 'glob';
import browserify from 'browserify';
import watchify from 'watchify';
import envify from 'envify';
import babelify from 'babelify';
import _ from 'lodash';
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpif from 'gulp-if';

export default function(gulp, plugins, args, config, taskTarget) {
  var dirs = config.directories;
  var entries = config.entries;

  let browserifyTask = function(files) {
    return files.map(function(entry) {
      let dest = path.resolve(taskTarget);

      // Options
      let customOpts = {
        entries: [entry],
        debug: true,
        transform: [
          envify,  // Sets NODE_ENV for better optimization of npm packages
          babelify // Enable ES6 features
        ]
      };

      let bundler = browserify(customOpts);

      if (!args.production) {
        // Setup Watchify for faster builds
        let opts = _.assign({}, watchify.args, customOpts);
        bundler = watchify(browserify(opts));
      }

      let rebundle = function() {
        let startTime = new Date().getTime();
        bundler.bundle()
          .on('error', function (err) {
            plugins.util.log(
              plugins.util.colors.red('Browserify compile error:'),
              err.message,
              '\n\n',
              err.codeFrame,
              '\n'
            );
            this.emit('end');
          })
          .pipe(vsource(entry))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(gulpif(args.production, plugins.uglify()))
            .on('error', plugins.util.log)
          .pipe(plugins.rename(function(path) {
            // Remove 'source' directory as well as prefixed folder underscores
            // Ex: 'src/_scripts' --> '/scripts'
            path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
          }))
          .pipe(plugins.sourcemaps.write('./'))
          .pipe(gulp.dest(dest))
          // Show which file was bundled and how long it took
          .on('end', function() {
            let time = (new Date().getTime() - startTime) / 1000;
            return console.log(
              plugins.util.colors.cyan(entry)
              + ' was browserified: '
              + plugins.util.colors.magenta(time + 's'));
          });
      };

      if (!args.production) {
        bundler.on('update', browserifyTask); // on any dep update, runs the bundler
        bundler.on('log', plugins.util.log); // output build logs to terminal
      }
      return rebundle();
    });
  };

  // Browserify Task
  gulp.task('browserify', function(done) {
    return glob('./' + path.join(dirs.source, dirs.scripts, entries.js), function(err, files) {
      if (err) {
        done(err);
      }

      return browserifyTask(files);
    });
  });
}
