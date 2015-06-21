// Nunjucks task
// Compiles nunjucks templates to HTML

var path = require('path');
var vsource = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
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
  var browserifyOptions = browserify(
    path.join(rootPath, dirs.source, dirs.scripts, '/main.js'), {
    debug: true,
    transform: [
      require('envify'),
      require('babelify')<% if (jsFramework === 'angular') { %>,
      require('browserify-ngannotate'),
      require('browserify-ng-html2js')({
        module: '<%= _.camelize(projectName) %>',
        extension: 'html'
      })<% } else if (jsFramework === 'marionette') { %>,
      require('jstify')<% } %>
    ]
  });

  // Serve
  gulp.task('browserify:serve', function() {
    var dest = path.join(rootPath, dirs.temporary, dirs.scripts.replace(/^_/, ''));

    return browserifyOptions.bundle()
      .pipe(vsource('main.js'))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });

  // Build
  gulp.task('browserify:build', function() {
    var dest = path.join(rootPath, dirs.destination, dirs.scripts.replace(/^_/, ''));

    return browserifyOptions.bundle()
      .pipe(vsource('main.js'))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
          // Add transformation tasks to the pipeline here.
          .pipe(plugins.uglify())
          .on('error', plugins.util.log)
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  });

  // Test
  gulp.task('browserify:test', function(done) {
    var dest = path.join(rootPath, dirs.temporary, dirs.scripts.replace(/^_/, ''));
    glob(path.join(rootPath, dirs.source, '**/*.spec.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>'), {}, function(err, files) {
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
