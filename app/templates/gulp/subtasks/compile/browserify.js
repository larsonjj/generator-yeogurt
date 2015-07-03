// Nunjucks task
// Compiles nunjucks templates to HTML

var path = require('path');
var vsource = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var es = require('event-stream');
var glob = require('glob');
var browserify = require('browserify');

var browserifyTask = function browserifyTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;

  // Set up the browserify instance with default options
  var browserifyOptions = function(entry) {
    return browserify(
      entry, {
      debug: true,
      transform: [
        require('envify'),
        require('babelify')
      ]
    });
  };

  // Serve
  gulp.task('browserify:serve', function(done) {
    var dest = path.join(rootPath, dirs.temporary, dirs.scripts.replace(/^_/, ''));
    glob(path.join(rootPath, dirs.source, dirs.scripts, '/*.js'), function(err, files) {
      if (err) {
        done(err);
      }

      var tasks = files.map(function(entry) {
        return browserifyOptions(entry).bundle()
          .pipe(vsource(path.basename(entry)))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init({loadMaps: true}))
          .pipe(plugins.sourcemaps.write('./'))
          .pipe(gulp.dest(dest))
          .pipe(browserSync.stream());
      });
      es.merge(tasks).on('end', done);
    });
  });

  // Build
  gulp.task('browserify:build', function(done) {
    var dest = path.join(rootPath, dirs.destination, dirs.scripts.replace(/^_/, ''));
    glob(path.join(rootPath, dirs.source, dirs.scripts, '/*.js'), function(err, files) {
      if (err) {
        done(err);
      }

      var tasks = files.map(function(entry) {
        return browserifyOptions(entry).bundle()
          .pipe(vsource(path.basename(entry)))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init({loadMaps: true}))
              // Add transformation tasks to the pipeline here.
              .pipe(plugins.uglify())
              .on('error', plugins.util.log)
          .pipe(plugins.sourcemaps.write('./'))
          .pipe(gulp.dest(dest));
      });
      es.merge(tasks).on('end', done);
    });
  });

  // Test
  gulp.task('browserify:test', function(done) {
    var dest = path.join(rootPath, dirs.temporary, dirs.scripts.replace(/^_/, ''));
    glob(path.join(rootPath, dirs.source, '**/*.spec.js'), {}, function(err, files) {
      if (err) {
        return plugins.util.log('Error globbing browserify:test');
      }
      var b = browserify({
        debug: true,
        transform: [
          require('envify'),
          require('babelify')
        ]
      });
      files.forEach(function(file) {
        b.add(file);
      });
      b.bundle()
        .pipe(vsource('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest(dest));
    });
    done();
  });

};

module.exports = browserifyTask;
