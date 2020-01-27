'use strict';

import path from 'path';
import glob from 'glob';
import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import envify from 'envify';
import babelify from 'babelify';
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpif from 'gulp-if';
import fancyLog from 'fancy-log';
import { plugins, args, config, taskTarget, browserSync } from '../utils';

let dirs = config.directories;
let entries = config.entries;

let browserifyTask = (files, done) => {
  return files.map(entry => {
    let dest = path.resolve(taskTarget);

    // Options
    let customOpts = {
      entries: [entry],
      debug: true,
      transform: [
        babelify, // Enable ES6 features
        envify // Sets NODE_ENV for better optimization of npm packages
      ],
      plugins: [
        ['@babel/plugin-transform-regenerator']
      ]
    };

    let bundler = browserify(customOpts);

    if (!args.production) {
      // Setup Watchify for faster builds
      let opts = Object.assign({}, watchify.args, customOpts);
      bundler = watchify(browserify(opts));
    }

    let rebundle = function() {
      let startTime = new Date().getTime();
      bundler
        .bundle()
        .on('error', function(err) {
          fancyLog(
            'Browserify compile error:',
            '\n',
            err.stack,
            '\n'
          );
          this.emit('end');
        })
        .pipe(vsource(entry))
        .pipe(buffer())
        .pipe(
          gulpif(!args.production, plugins.sourcemaps.init({ loadMaps: true }))
        )
        .pipe(gulpif(args.production, plugins.uglify()))
        .pipe(
          plugins.rename(function(filepath) {
            // Remove 'source' directory as well as prefixed folder underscores
            // Ex: 'src/_scripts' --> '/scripts'
            filepath.dirname = filepath.dirname
              .replace(dirs.source, '')
              .replace('_', '');
          })
        )
        .pipe(gulpif(!args.production, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(dest))
        // Show which file was bundled and how long it took
        .on('end', function() {
          let time = (new Date().getTime() - startTime) / 1000;
          fancyLog(
            entry +
            ' was browserified: ' +
            time + 's'
          );
          done();
          return browserSync.reload('*.js');
        });
    };

    if (!args.production) {
      bundler.on('update', rebundle); // on any dep update, runs the bundler
      bundler.on('log', fancyLog); // output build logs to terminal
    }
    return rebundle();
  });
};

// Browserify Task
gulp.task('browserify', done => {
  glob(`${path.join(dirs.source, dirs.scripts)}/${entries.js}`, function(
    err,
    files
  ) {
    if (err) {
      throw new Error(err);
    }

    return browserifyTask(files, done);
  });
});
