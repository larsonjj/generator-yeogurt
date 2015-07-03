// Nunjucks task
// Compiles nunjucks templates to HTML

var path = require('path');
var dirToObj = require('../../lib/dir-to-obj');

var nunjucksTask = function nunjucksTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;
  // Convert directory to JS Object
  var siteData = dirToObj(path.join(rootPath, dirs.source, dirs.data));

  // Source file for nunjucks tasks
  var source = [
    path.join(rootPath, dirs.source, '**/*.nunjucks'),
    path.join('!', rootPath, dirs.source, '{**/\_*,**/\_*/**}')
  ];

  // Configure lookup path for nunjucks templates
  plugins.nunjucksRender.nunjucks.configure([path.join(rootPath, dirs.source)]);

  // Serve
  gulp.task('nunjucks:serve', function() {
    var dest = path.join(rootPath, dirs.temporary);
    return gulp.src(source)
    .pipe(plugins.changed(dest))
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
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
  });

  // Build
  gulp.task('nunjucks:build', function() {
    var dest = path.join(rootPath, dirs.destination);
    return gulp.src(source)
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

};

module.exports = nunjucksTask;
