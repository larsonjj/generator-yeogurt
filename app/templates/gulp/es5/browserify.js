'use strict';

var path = require('path');
var glob = require('glob');
var browserify = require('browserify');
var watchify = require('watchify');
var envify = require('envify');
var _ = require('lodash');
var vsource = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulpif = require('gulp-if');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;

  var browserifyTask = function(files) {
    return files.map(function(entry) {
      var dest = path.resolve(taskTarget);

      // Options
      var customOpts = {
        entries: [entry],
        debug: true,
        transform: [
          envify  // Sets NODE_ENV for better optimization of npm packages
        ]
      };

      var bundler = browserify(customOpts);

      if (!args.production) {
        // Setup Watchify for faster builds
        var opts = _.assign({}, watchify.args, customOpts);
        bundler = watchify(browserify(opts));
      }

      var rebundle = function() {
        var startTime = new Date().getTime();
        bundler.bundle()
          .on('error', function(err) {
            plugins.util.log(
              plugins.util.colors.red('Browserify compile error:'),
              '\n',
              err.stack,
              '\n'
            );
            this.emit('end');
          })
          .on('error', plugins.notify.onError(config.defaultNotification))
          .pipe(vsource(entry))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(gulpif(args.production, plugins.uglify()))
            .on('error', plugins.notify.onError(config.defaultNotification))
          .pipe(plugins.rename(function(filepath) {
            // Remove 'source' directory as well as prefixed folder underscores
            // Ex: 'src/_scripts' --> '/scripts'
            filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_', '');
          }))
          .pipe(plugins.sourcemaps.write('./'))
          .pipe(gulp.dest(dest))
          // Show which file was bundled and how long it took
          .on('end', function() {
            var time = (new Date().getTime() - startTime) / 1000;
            console.log(
              plugins.util.colors.cyan(entry)
              + ' was browserified: '
              + plugins.util.colors.magenta(time + 's'));
            return browserSync.reload('*.js');
          });
      };

      if (!args.production) {
        bundler.on('update', rebundle); // on any dep update, runs the bundler
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
};
