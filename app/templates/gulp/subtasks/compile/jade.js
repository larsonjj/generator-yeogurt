// Nunjucks task
// Compiles nunjucks templates to HTML

var path = require('path');
var jade = require('jade');
var dirToObj = require('../../lib/dir-to-obj');

var jadeTask = function jadeTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;
  // Convert directory to JS Object
  var siteData = dirToObj(path.join(rootPath, dirs.source, dirs.data));

  // Source file for jade tasks
  var source = [
    path.join(rootPath, dirs.source, '**/*.jade'),
    path.join('!', rootPath, dirs.source, '{**/\_*,**/\_*/**}')
  ];

  // Serve
  gulp.task('jade:serve', function() {
    var dest = path.join(rootPath, dirs.temporary);
    return gulp.src(source)
    .pipe(plugins.changed(dest))
    .pipe(plugins.jade({
      jade: jade,
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
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
  });

  // Build
  gulp.task('jade:build', function() {
    var dest = path.join(rootPath, dirs.destination);
    return gulp.src(source)
    .pipe(plugins.jade({
      jade: jade,
      locals: {
        config: config,
        debug: false,
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

};

module.exports = jadeTask;
